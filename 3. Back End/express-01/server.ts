import express, { Request, Response, Application } from "express";

const PORT: number = 8000;

const app: Application = express();

app.get("/greetings", async (req: Request, res: Response): Promise<void> => {
  res.send({
    greeting: "Hello World From GET Method",
  });
});

app.post("/greetings", async (req: Request, res: Response): Promise<void> => {
  res.send({
    greeting: "Hello World From POST Method",
  });
});

app.patch("/greetings", async (req: Request, res: Response): Promise<void> => {
  res.send({
    greeting: "Hello World From PATCH Method",
  });
});

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
