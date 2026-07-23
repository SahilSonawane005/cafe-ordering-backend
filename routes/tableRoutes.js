import { getTables,getTableById,createtable,updatetable,deletetable ,tSession} from "../controllers/tableController.js";


import express from "express";
const tableRouter = express.Router();

tableRouter.get("/", getTables);
tableRouter.get("/:id", getTableById);
tableRouter.post("/add", createtable);
tableRouter.put("/:id", updatetable);
tableRouter.delete("/:id", deletetable);
tableRouter.post("/session", tSession);
export default tableRouter;