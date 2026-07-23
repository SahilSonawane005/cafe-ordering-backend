import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import { logger } from "./utils/logger.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import { rateLimiter } from "./middlewares/rateLimiter.js";
import userRouter from "./routes/userRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import menuRouter from "./routes/menuRoutes.js";
import tableRouter from "./routes/tableRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.get("/test",rateLimiter, (req, res) => {
  logger.info("Test route accessed");
  res.json({ message: "API is working!" });
});

app.use(cookieParser());
app.use("/users", userRouter);
app.use("/category", categoryRouter);
app.use("/menu", menuRouter);
app.use("/tables", tableRouter);
app.use("/orders", orderRouter);
app.use(errorMiddleware);
export default app;
