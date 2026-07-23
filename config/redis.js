import { createClient } from "redis";
import { logger } from "../utils/logger.js";

export const redisClient = createClient({
  url: "redis://localhost:6379",
});

redisClient.on("error", (err) => {
  logger.info("Redis Error:", err);
});

export async function connectRedis() {
  try {
    await redisClient.connect();
    logger.info("Redis Connected");
  } catch (error) {
    logger.info("Redis connection error:", error);
  }
}