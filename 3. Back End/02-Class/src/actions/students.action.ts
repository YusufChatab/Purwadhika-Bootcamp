import { Request, Response, NextFunction } from "express";
import { IStudents } from "../interface/students.interface";
import { QueryError } from "mysql2";
import db from "../db";

export class StudentsAction {
  public getStudents = async () => {
    try {
      db.query(
        "select * from students",
        (error: QueryError, results: IStudents[]) => {
          if (error) throw new Error("Something Went Wrong");

          return results;
        }
      );
    } catch (error) {
      throw error;
    }
  };
}
