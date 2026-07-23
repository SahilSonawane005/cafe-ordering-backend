import { logger } from "../utils/logger.js";
import { pool } from "../config/db.js";
import { redisClient } from "../config/redis.js";

export const getAllCategories = async () => {
  // Try to read from Redis
  try {
    const cached = await redisClient.get("categories");

    if (cached) {
      logger.info("Served from Redis");
      return JSON.parse(cached);
    }
  } catch (err) {
    logger.info("Redis GET failed:", err.message);
  }

  logger.info("Served from PostgreSQL");

  const result = await pool.query("SELECT * FROM t_category WHERE status = 1");

  try {
    await redisClient.setEx("categories", 600, JSON.stringify(result.rows));
  } catch (err) {
    logger.info("Redis SET failed:", err.message);
  }

  return result.rows;
};

export const createCategory = async (name, created_by) => {
  const query = `
    INSERT INTO t_category (name,created_by,status,created_at)
    VALUES ($1,$2,1,NOW())
    RETURNING id,name,created_at;
  `;
  const result = await pool.query(query, [name, created_by]);
  try {
    await redisClient.del("categories");
  } catch (err) {
    logger.info("redis store failed", err.message);
  }
  return result.rows[0];
};

export const getCategoryById = async (id) => {
  const result = await pool.query(
    "SELECT id,name,TO_CHAR(created_at, 'YYYY-MM-DD-HH24-MI-SS'),created_by FROM t_category WHERE id = $1 and status = 1",
    [id],
  );
  return result.rows[0];
};

export const updateCategory = async (id, name, status) => {
  const query = `
    UPDATE t_category
    SET name = COALESCE($1, name), status = COALESCE($3, 1)
    WHERE id = $2
    RETURNING id,name;
    `;
  const result = await pool.query(query, [name, id, status]);
  return result.rows[0];
};

export const deleteCategory = async (id) => {
  const query = `
    UPDATE t_category
    SET status = 2
    WHERE id = $1
    RETURNING id;
    `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};
