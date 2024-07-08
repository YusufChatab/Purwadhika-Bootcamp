import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";
import { transporter } from "../libs/nodemailer";
import { join } from "path";
import fs from "fs/promises";
import handlebars from "handlebars";

export class SampleController {
  async getSamplesData(req: Request, res: Response, next: NextFunction) {
    try {
      const samples = await prisma.sample.findMany();

      return res.status(200).send({
        message: "Samples fetched successfully",
        data: samples,
      });
    } catch (error) {
      next(error);
    }
  }

  async createSampleData(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, name } = req.body;

      const newSampleData = await prisma.sample.create({
        data: {
          code,
          name,
        },
      });

      return res.status(200).send({
        message: "Sample data created successfully",
        data: newSampleData,
      });
    } catch (error) {
      next(error);
    }
  }

  async addNewImage(req: Request, res: Response, next: NextFunction) {
    try {
      const { file } = req;

      if (!file) {
        throw new Error("File not Uploaded");
      }

      return res.status(200).send({
        message: "File uploaded successfully",
        data: file,
      });
    } catch (error) {
      next(error);
    }
  }

  async addNewImages(req: Request, res: Response, next: NextFunction) {
    try {
      const { files } = req;

      if (!files?.length) {
        throw new Error("File not Uploaded");
      }

      return res.status(200).send({
        message: "File uploaded successfully",
        data: files,
      });
    } catch (error) {
      next(error);
    }
  }

  async sendEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const templatePath = join(__dirname, "../templates", "welcome.hbs");
      const templateSource = await fs.readFile(templatePath, "utf-8");

      const compileTemplate = handlebars.compile(templateSource);

      const html = compileTemplate({ name: "Mmystic10" });

      await transporter.sendMail({
        to: "mmystic10@gmail.com",
        subject: "Sending Email using Node.js",
        html: html,
      });

      return res.status(200).send({
        message: "Email sent successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
