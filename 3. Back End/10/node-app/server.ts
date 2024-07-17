import express, { Request, Response, Application } from "express";
import { PoolConnection, QueryError } from "mysql2";
import db from "./db";
import { redisClient } from "./redis";
import axios from "axios";
import { logErrorHandler } from "./logErrorHandler";

type User = {
  id: number;
  username: string;
};

const PORT = 8080;
const app: Application = express();
redisClient.connect();

app.get("/user", (req: Request, res: Response) => {
  db.query(`select * from user`, (error: QueryError, results: User[]) => {
    if (error) res.status(500).send(error);

    res.status(200).json({
      data: results,
    });
  });
});

app.get("/posts", async (req: Request, res: Response) => {
  const redisData = await redisClient.get("post");
  if (redisData) {
    return res.status(200).json({
      message: "Diambil dr Redis",
      data: JSON.parse(redisData),
    });
  }
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  await redisClient.setEx("post", 5, JSON.stringify(data));
  return res.status(200).json({
    message: "Bukan dr Redis",
    data,
  });
});

app.get("/error", async (req: Request, res: Response) => {
  try {
    throw new Error("Error Terjadi");
  } catch (err: any) {
    logErrorHandler(err.message);
    res.status(500).send({
      message: err.message,
    });
  }
});

db.getConnection(
  (err: NodeJS.ErrnoException | null, connection: PoolConnection) => {
    if (err) return console.log(err);

    console.log("Database connected successfully");
  }
);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
