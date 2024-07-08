import { Router } from "express";
import { SampleController } from "../controllers/sample.controller";
import { validateSample } from "../validators/sample.validator";
import { uploader } from "../libs/uploader";

export class SampleRouter {
  private SampleController: SampleController;
  private router: Router;
  constructor() {
    this.SampleController = new SampleController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.SampleController.getSamplesData);
    this.router.post(
      "/",
      validateSample,
      this.SampleController.createSampleData
    );
    this.router.post(
      "/single-upload",
      uploader("PIC", "/images").single("file"),
      this.SampleController.addNewImage
    );
    this.router.post(
      "/multiple-upload",
      uploader("PIC", "/images").array("files", 4),
      this.SampleController.addNewImages
    );

    this.router.post("/send-email", this.SampleController.sendEmail);
  }

  public getRouter() {
    return this.router;
  }
}
