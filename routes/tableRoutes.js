import { getTables,getTableById,createtable,updatetable,deletetable ,tSession} from "../controllers/tableController.js";


import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const tableRouter = express.Router();

tableRouter.get("/", authMiddleware,getTables);
tableRouter.get("/:id",authMiddleware, getTableById);
tableRouter.post("/add",authMiddleware, createtable);
tableRouter.put("/:id",authMiddleware, updatetable);
tableRouter.delete("/:id",authMiddleware, deletetable);
tableRouter.post("/session", tSession);
export default tableRouter;