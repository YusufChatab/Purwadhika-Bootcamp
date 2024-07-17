import { config } from "dotenv";
config({
  path: ".env",
});

export const {
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_HOST,
  MYSQL_PORT,
  REDIS_URL,
} = process.env;
