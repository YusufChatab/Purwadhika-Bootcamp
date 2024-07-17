import { error } from "console";
import fs from "fs";

export const logErrorHandler = (message: string) => {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp} - ${message}\n`;

  fs.appendFile("error.log", logMessage, (err) => {
    if (err) console.log(`Error writing to the log file: ${err.message}`);
  });
};
