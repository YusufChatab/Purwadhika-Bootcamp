import { Request, Response, NextFunction } from "express";
import { JSON_SERVER_URL } from "../config";
import { IExpense } from "../interface/expenses.interface";
import axios from "axios";

export class ExpensesController {
  public getExpensesController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { data } = await axios.get(`${JSON_SERVER_URL}/expenses`);
      res.status(200).json({
        message: "Expenses fetched successfully",
        data,
      });
    } catch (error) {
      next(error);
    }
  };

  public getExpensesByIdController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { expenseId } = req.params;
      const { data } = await axios.get(
        `${JSON_SERVER_URL}/expenses?id=${expenseId}`
      );
      res.status(200).json({
        message: "Expense fetched successfully",
        data,
      });
    } catch (error) {
      next(error);
    }
  };

  public createExpensesController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { title, nominal, type, category }: IExpense = req.body;
      const { data } = await axios.post(`${JSON_SERVER_URL}/expenses`, {
        title,
        nominal,
        type,
        category,
        date: new Date(),
      });
      console.log(data);
      res.status(200).json({
        message: "Expense created successfully",
        data,
      });
    } catch (error) {
      next(error);
    }
  };
}
