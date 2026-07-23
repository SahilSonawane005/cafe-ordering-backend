import express from "express";
import { getMenuController,getMenuById,createMenu,updateMenu,deleteMenu } from "../controllers/menuController.js";

const menuRouter = express.Router();
menuRouter.get("/", getMenuController);
menuRouter.post("/add", createMenu);
menuRouter.get("/:id", getMenuById);
menuRouter.put("/:id", updateMenu);
menuRouter.delete("/:id", deleteMenu);

export default menuRouter;