import { Request } from "express";
import multer from "multer";
import { join } from "path";

type DestinationCallback = (err: Error | null, destination: string) => void;
type FilenameCallback = (err: Error | null, destination: string) => void;

export const uploader = (filePrefix: string, folderName?: string) => {
  const defaultDir = join(__dirname, "../../public");

  const storage = multer.diskStorage({
    destination: (
      req: Request,
      file: Express.Multer.File,
      cb: DestinationCallback
    ) => {
      const destination = folderName ? defaultDir + folderName : defaultDir;

      cb(null, destination);
    },
    filename: (
      req: Request,
      file: Express.Multer.File,
      cb: FilenameCallback
    ) => {
      const originalName = file.originalname.split(".");
      const fileExtension = originalName[originalName.length - 1];
      const newFileName = filePrefix + Date.now() + "." + fileExtension;

      cb(null, newFileName);
    },
  });

  return multer({ storage: storage });
};
