import express, {
  json,
  Express,
  Request,
  Response,
  NextFunction,
} from "express";
import cors from "cors";
import { SampleRouter } from "./routes/sample.router";

const PORT = process.env.PORT || 8080;

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure() {
    this.app.use(json());
    this.app.use(cors());
  }

  private routes() {
    const sampleRouter = new SampleRouter();

    this.app.use("/samples", sampleRouter.getRouter());
  }

  private handleError() {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).send(err.message);
      }
    );
  }
  public start() {
    this.app.listen(PORT, () => {
      console.log(`Server listening on the port ${PORT}`);
    });
  }
}
