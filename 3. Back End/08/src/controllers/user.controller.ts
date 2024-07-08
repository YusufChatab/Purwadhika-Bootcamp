import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";
import userAction, { UserAction } from "../actions/user.action";
import { User } from "../types/express";

export class UserController {
  public loginController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { email, password } = req.body;

      const user = await userAction.login(email, password);

      res.status(200).json({
        message: "Login successfully",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  };

  public createUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { username, email, password, firstname, lastname } = req.body;
      const userAction = new UserAction();

      const user = await userAction.createUser(
        username,
        email,
        password,
        firstname,
        lastname
      );

      res.status(201).json({
        message: "User created successfully",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  };

  public getUsersController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const {
        username,
        firstname,
        lastname,
        page = 1,
        pageSize = 10,
      } = req.query;

      let filter = {};

      if (username) filter = { ...filter, username: { contains: username } };

      if (firstname) filter = { ...filter, firstname: { contains: firstname } };

      if (lastname) filter = { ...filter, lastname: { contains: lastname } };

      const user = await prisma.user.findMany({
        skip: (Number(page) - 1) * Number(pageSize),
        take: Number(pageSize),
        where: {
          AND: [
            {
              ...filter,
            },
            {
              roleId: {
                not: 1,
              },
            },
          ],
        },
      });
      res.status(200).json({
        message: "User fetched successfully",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  };

  public getUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { email } = req.user as User;

      const user = await userAction.findUserByEmail(String(email));

      if (!user) throw new Error("User not found");

      res.status(200).json({
        message: "User fetched successfully",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  };

  public updateUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { userId } = req.params;
      const { firstname, lastname } = req.body;

      let params = {};
      if (firstname) params = { ...params, firstname };
      if (lastname) params = { ...params, lastname };

      const user = await prisma.user.update({
        where: {
          id: Number(userId),
        },
        data: {
          ...params,
        },
      });

      res.status(200).json({
        message: "User fetched successfully",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  };

  public deleteUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { userId } = req.params;

      const user = await prisma.user.delete({
        where: {
          id: Number(userId),
        },
      });

      res.status(200).json({
        message: "User Delete successfully",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  };
}
