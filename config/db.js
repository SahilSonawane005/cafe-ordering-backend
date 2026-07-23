import pkg from "pg";
import { ENV } from "./env.js";

const { Pool } = pkg;

export const pool = new Pool({
  connectionString: ENV.DB_URL,
});

pool.connect()
  .then(() => console.log("DB Connected"))
  .catch(err => console.error("DB Error", err));


            