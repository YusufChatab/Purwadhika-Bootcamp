import { Router } from "express";
import { IRoute } from "../interface/routes.interface";
import { ExpensesController } from "../controllers/expenses.controller";

export class ExpenseRoute implements IRoute {
  public router: Router = Router();
  public expenses = new ExpensesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/expenses", this.expenses.getExpensesController);
    this.router.get("/expenses/:id", this.expenses.getExpensesByIdController);
    this.router.post("/expenses", this.expenses.createExpensesController);
  }
}
