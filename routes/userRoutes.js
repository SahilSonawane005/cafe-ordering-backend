import express from "express";
import {
  getUsers,
  registerUser,
  loginUser,
  refreshTokenHandler,
  logoutUser,
} from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.get("/", authMiddleware, getUsers);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/refresh", refreshTokenHandler);
userRouter.post("/logout", logoutUser);

export default userRouter;
