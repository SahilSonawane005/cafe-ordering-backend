import { pool } from "../config/db.js";
export const getTablesdb = async () => {
  const result = await pool.query("SELECT * FROM t_tables");
  return result.rows;
};

export const getTableByIddb = async (id) => {
  const result = await pool.query("SELECT * FROM t_tables WHERE id = ?", [id]);
  return result.rows[0];
};
export const getLastTableNumber = async () => {
  const result = await pool.query(
    `SELECT table_number FROM t_tables
     ORDER BY id DESC LIMIT 1`,
  );

  return result.rows[0]?.table_number;
};
export const createtabledb = async (table) => {
  const { table_number, qr_code, created_by } = table;

  const result = await pool.query(
    `INSERT INTO t_tables (table_number, qr_code, status, created_by)
     VALUES ($1, $2, $3, $4)
     RETURNING id`,
    [table_number, qr_code, 1, created_by],
  );

  return result.rows[0].id;
};

export const updatetabledb = async (id, table) => {
  const { status } = table;
  const [result] = await pool.query(
    "UPDATE t_tables SET status = ? WHERE id = ?",
    [status, id],
  );
  return result.affectedRows > 0;
};

export const deletetabledb = async (id) => {
  const [result] = await pool.query(
    "UPDATE t_tables SET status = 2  WHERE id = ?",
    [id],
  );
  return result.affectedRows > 0;
};

export const tSessiondb = async (table_id) => {
  const result = await pool.query(
    `INSERT INTO t_sessions (table_id, status, start_time)
     VALUES ($1, 1, NOW())
     RETURNING id`,
    [table_id]
  );
  return result.rows[0].id;
};
