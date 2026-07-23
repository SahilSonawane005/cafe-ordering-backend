import { pool } from "../config/db.js";

export const getMenuFromDB = async () => {
  const result = await pool.query(
    "SELECT id,name,price,description,category_id,status,TO_CHAR(created_at, 'YYYY-MM-DD-HH24-MI-SS')as created_at,created_by FROM t_menu where status=1",
  );
    return result.rows;
};

export const createMenu = async (name, price, description, category_id, created_by) => {
  const query = `
    INSERT INTO t_menu (name,price,description,category_id,status,created_at,created_by)
    VALUES ($1,$2,$3,$4,1,NOW(),$5)
    RETURNING id,name,price,description,category_id,status,created_at;
  `;
  return await pool.query(query, [
    name,
    price,  
    description,
    category_id,
    created_by
  ]);
};

export const getMenuById = async (id) => {
  const result = await pool.query(
    "SELECT id,name,price,description,category_id,status,TO_CHAR(created_at, 'YYYY-MM-DD-HH24-MI-SS')as created_at,created_by FROM t_menu where id=$1 and status=1",
    [id],
  );
    return result.rows[0];
};

export const updateMenu = async (
  id,
  name,
  price,
  description,
  category_id,
  status
) => {
  const query = `
    UPDATE t_menu
    SET
      name = COALESCE($1, name),
      price = COALESCE($2, price),
      description = COALESCE($3, description),
      category_id = COALESCE($4, category_id),
      status = COALESCE($5, status)
    WHERE id = $6 
    RETURNING id, name, price, description, category_id, status, created_at;
  `;

  const result = await pool.query(query, [
    name ?? null,
    price ?? null,
    description ?? null,
    category_id ?? null,
    status ?? null,
    id,
  ]);

  return result.rows[0];
};

export const deleteMenu = async (id) => {
  const query = `
    UPDATE t_menu
    SET status = 2
    WHERE id = $1
    RETURNING id,name,status;
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};