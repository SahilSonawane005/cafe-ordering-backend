import express from "express";
import {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);
categoryRouter.post("/add",authMiddleware, createCategory);
categoryRouter.get("/:id", getCategory);
categoryRouter.put("/:id",authMiddleware, updateCategory);
categoryRouter.delete("/:id",authMiddleware, deleteCategory);
export default categoryRouter;
