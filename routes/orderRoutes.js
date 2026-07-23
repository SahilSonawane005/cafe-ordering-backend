import express from "express";

import {
  addOrderItem,
  generateBill,
  getOrders,
  updateOrderTxnStatus,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/add-item", addOrderItem);

orderRouter.post("/generate-bill", generateBill);

orderRouter.get("/", getOrders);

orderRouter.put("/txn/:txn_id", updateOrderTxnStatus);

export default orderRouter;
