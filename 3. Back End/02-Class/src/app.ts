import express, { Application, Request, Response, NextFunction } from "express";
import { IRoute } from "./interface/routes.interface";
import { PORT } from "./config";

export class App {
  public app: Application;
  public port: string | number;

  constructor(routes: IRoute[]) {
    this.app = express();
    this.port = PORT || 8080;

    this.initializeMiddlewares();
    this.initilizeRoutes(routes);
    this.initializeErrorMiddlewares();
  }
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
  }

  private initilizeRoutes(routes: IRoute[]) {
    routes.forEach((route) => {
      this.app.use("/api", route.router);
    });
  }
  private initializeErrorMiddlewares() {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.log(err);
        res.status(500).send("Something went wrong");
      }
    );
  }
}
