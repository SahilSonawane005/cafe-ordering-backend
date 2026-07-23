import { logger } from "../utils/logger.js";
import { pool } from "../config/db.js";

const getUsersFromDB = async () => {
  const result = await pool.query(
    "SELECT id,u_name,email,role_id,status,TO_CHAR(created_at, 'YYYY-MM-DD-HH24-MI-SS') FROM t_users where status=1",
  );

  return result.rows;
};

const createUser = async (u_name, email, hashedPassword, role_id) => {
  const query = `
    INSERT INTO t_users (u_name,email,password,role_id,status,created_at)
    VALUES ($1, $2,$3,$4,1,NOW())
    RETURNING  u_name,email,role_id,created_at;
  `;

  const result = await pool.query(query, [
    u_name,
    email,
    hashedPassword,
    role_id,
  ]);

  return result.rows[0];
};

const getUserbyEmail = async (email) => {
  const result = await pool.query("SELECT * FROM t_users WHERE email = $1 and status = 1", [
    email,
  ]);

  return result.rows[0];
};
export { getUsersFromDB, createUser, getUserbyEmail };
