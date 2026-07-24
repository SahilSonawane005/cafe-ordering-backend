import express from "express";

import {
  addOrderItem,
  generateBill,
  getOrders,
  updateOrderTxnStatus,
} from "../controllers/orderController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const orderRouter = express.Router();

orderRouter.post("/add-item", addOrderItem);

orderRouter.post("/generate-bill", generateBill);

orderRouter.get("/",authMiddleware, getOrders);

orderRouter.put("/txn/:txn_id",authMiddleware, updateOrderTxnStatus);

export default orderRouter;
