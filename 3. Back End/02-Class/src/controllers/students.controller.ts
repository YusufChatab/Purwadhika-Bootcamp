import { Request, Response, NextFunction } from "express";
import db from "../db";
import { QueryError } from "mysql2";
import { IStudents } from "../interface/students.interface";
import { StudentsAction } from "../actions/students.action";

export class StudentsController {
  public getStudentsController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const studentsAction = new StudentsAction();
      db.query(
        "select * from students",
        (error: QueryError, results: IStudents[]) => {
          if (error) throw new Error("Something Went Wrong");
          res.status(200).json({
            message: "Students fetched successfully",
            data: results,
          });
        }
      );
    } catch (error) {
      next(error);
    }
  };
}
