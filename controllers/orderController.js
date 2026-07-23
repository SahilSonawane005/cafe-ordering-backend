import { asyncHandler } from "../utils/asyncHandler.js";

import {
  addOrderItemService,
  generateBillService,
  getOrdersService,
  updateOrdertxnStatusService,
} from "../services/orderService.js";


export const addOrderItem = asyncHandler(async (req, res) => {

  const result = await addOrderItemService(req.body);

  res.status(201).json({
    success: true,
    data: result,
  });
});


export const generateBill = asyncHandler(async (req, res) => {

  const { session_id } = req.body;

  const bill = await generateBillService(session_id);

  res.status(200).json({
    success: true,
    data: bill,
  });
});



export const getOrders = asyncHandler(async (req, res) => {

  const orders = await getOrdersService();
  res.status(200).json({
    success: true,
    data: orders,
  });
});

export const updateOrderTxnStatus =
  asyncHandler(async (req, res) => {

    const { txn_id } = req.params;

    const updatedTxn =
      await updateOrdertxnStatusService(
        txn_id,
        req.body
      );

    res.status(200).json({
      success: true,
      message: "Order transaction updated",
      data: updatedTxn,
    });
});