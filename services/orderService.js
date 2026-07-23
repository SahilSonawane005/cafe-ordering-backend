import {
  getActiveSession,
  createSession,
  addOrderTxnDB,
  getMenuPrice,
  getSessionTxns,
  getLastOrderNumber,
  createFinalBillDB,
  closeSessionDB,
  getOrdersDB,
  updateOrdertxnStatusDB,
} from "../repositories/orderRepo.js";

export const addOrderItemService = async ({ table_id, items }) => {
  let session = await getActiveSession(table_id);

  if (!session) {
    session = await createSession(table_id);
  }

  const insertedItems = [];

  for (const item of items) {
    const menu = await getMenuPrice(item.menu_id);

    if (!menu) {
      throw new Error(`Menu item ${item.menu_id} not found`);
    }

    const totalPrice = Number(menu.price) * item.quantity;

    const txn = await addOrderTxnDB({
      session_id: session.id,
      menu_id: item.menu_id,
      quantity: item.quantity,
      price: totalPrice,
    });

    insertedItems.push(txn);
  }

  return {
    session_id: session.id,
    items: insertedItems,
  };
};

export const generateBillService = async (session_id) => {
  const txns = await getSessionTxns(session_id);

  if (!txns.length) {
    throw new Error("No items found");
  }

  const totalAmount = txns.reduce((sum, item) => sum + Number(item.price), 0);

  const lastOrder = await getLastOrderNumber();

  let next = 1;

  if (lastOrder) {
    next = parseInt(lastOrder.replace("O", "")) + 1;
  }

  const order_number = `O${String(next).padStart(3, "0")}`;

  const bill = await createFinalBillDB({
    session_id,
    order_number,
    total_amount: totalAmount,
  });

  await closeSessionDB(session_id);

  return bill;
};

export const getOrdersService = async () => {
  const orders = await getOrdersDB();
  return orders;
};
export const updateOrdertxnStatusService = async (txn_id, data) => {
  if (!data.status) {
    throw new Error("Status is required");
  }

  const updatedTxn = await updateOrdertxnStatusDB(txn_id, data);

  if (!updatedTxn) {
    throw new Error("Transaction not found");
  }

  return updatedTxn;
};
