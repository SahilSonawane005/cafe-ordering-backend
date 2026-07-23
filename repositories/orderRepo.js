import { pool } from "../config/db.js";


export const getActiveSession = async (table_id) => {

  const result = await pool.query(
    `
    SELECT *
    FROM t_table_sessions
    WHERE table_id = $1
    AND end_time IS NULL
    LIMIT 1
    `,
    [table_id]
  );

  return result.rows[0];
};



export const createSession = async (table_id) => {

  const result = await pool.query(
    `
    INSERT INTO t_table_sessions
    (table_id, status)
    VALUES ($1, 1)
    RETURNING *
    `,
    [table_id]
  );

  return result.rows[0];
};




export const addOrderTxnDB = async ({
  session_id,
  menu_id,
  quantity,
  price,
}) => {

  const result = await pool.query(
    `
    INSERT INTO t_order_txn
    (
      session_id,
      menu_id,
      quantity,
      price,
      status
    )
    VALUES ($1, $2, $3, $4, 3)
    RETURNING *
    `,
    [
      session_id,
      menu_id,
      quantity,
      price,
    ]
  );

  return result.rows[0];
};



export const getMenuPrice = async (menu_id) => {

  const result = await pool.query(
    `
    SELECT *
    FROM t_menu
    WHERE id = $1
    `,
    [menu_id]
  );

  return result.rows[0];
};



export const getSessionTxns = async (session_id) => {

  const result = await pool.query(
    `
    SELECT *
    FROM t_order_txn
    WHERE session_id = $1
    `,
    [session_id]
  );

  return result.rows;
};


export const getLastOrderNumber = async () => {

  const result = await pool.query(
    `
    SELECT order_number
    FROM t_order
    ORDER BY id DESC
    LIMIT 1
    `
  );

  return result.rows[0]?.order_number;
};




export const createFinalBillDB = async ({
  session_id,
  order_number,
  total_amount,
}) => {

  const result = await pool.query(
    `
    INSERT INTO t_order
    (
      session_id,
      order_number,
      total_amount,
      status
    )
    VALUES ($1, $2, $3, 8)
    RETURNING *
    `,
    [
      session_id,
      order_number,
      total_amount,
    ]
  );

  return result.rows[0];
};


export const closeSessionDB = async (session_id) => {

  await pool.query(
    `
    UPDATE t_table_sessions
    SET end_time = NOW() , status = 2
    WHERE id = $1
    `,
    [session_id]
  );
};

export const getOrdersDB = async () => {

  const result = await pool.query(
    `
    SELECT o.*, s.table_id
    FROM t_order o  
    JOIN t_table_sessions s
    ON o.session_id = s.id
    ORDER BY o.created_at DESC
    `
  );

  return result.rows;
};


export const updateOrdertxnStatusDB = async (
  txn_id,
  data
) => {

  const fields = [];
  const values = [];

  let count = 1;

  // =========================
  // STATUS (MANDATORY)
  // =========================

  fields.push(`status = $${count}`);
  values.push(data.status);
  count++;

  // =========================
  // MENU ID (OPTIONAL)
  // =========================

  if (data.menu_id !== undefined) {
    fields.push(`menu_id = $${count}`);
    values.push(data.menu_id);
    count++;
  }

  // =========================
  // QUANTITY (OPTIONAL)
  // =========================

  if (data.quantity !== undefined) {
    fields.push(`quantity = $${count}`);
    values.push(data.quantity);
    count++;
  }

  // =========================
  // PRICE (OPTIONAL)
  // =========================

  if (data.price !== undefined) {
    fields.push(`price = $${count}`);
    values.push(data.price);
    count++;
  }

  // =========================
  // TXN ID
  // =========================

  values.push(txn_id);

  const query = `
    UPDATE t_order_txn
    SET ${fields.join(", ")}
    WHERE id = $${count}
    RETURNING *
  `;

  const result = await pool.query(query, values);

  return result.rows[0];
};