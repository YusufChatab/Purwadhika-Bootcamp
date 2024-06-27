import { Router } from "express";
import { IRoute } from "../interface/routes.interface";
import { StudentsController } from "../controllers/students.controller";

export class StudentRoute implements IRoute {
  public router: Router = Router();
  public students = new StudentsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/students", this.students.getStudentsController);
  }
}
