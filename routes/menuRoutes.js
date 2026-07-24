import express from "express";
import { getMenuController,getMenuById,createMenu,updateMenu,deleteMenu } from "../controllers/menuController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const menuRouter = express.Router();
menuRouter.get("/", getMenuController);
menuRouter.post("/add",authMiddleware, createMenu);
menuRouter.get("/:id", getMenuById);
menuRouter.put("/:id",authMiddleware, updateMenu);
menuRouter.delete("/:id",authMiddleware, deleteMenu);

export default menuRouter;