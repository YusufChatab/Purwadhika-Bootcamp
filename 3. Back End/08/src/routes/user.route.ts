import { Router } from "express";
import { IRoute } from "../interface/routes.interface";
import { UserController } from "../controllers/user.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class UserRoute implements IRoute {
  public router: Router = Router();
  public user = new UserController();
  private guard = new AuthMiddleware();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/users", this.user.getUsersController);
    this.router.get(
      "/users/profile",
      this.guard.verifyToken,
      this.user.getUserController
    );
    this.router.post("/register", this.user.createUserController);
    this.router.post("/login", this.user.loginController);
    this.router.patch("/users/:userId", this.user.updateUserController);
    this.router.delete("/users/:userId", this.user.deleteUserController);
  }
}
