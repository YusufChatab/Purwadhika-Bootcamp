import { App } from "./app";
import { ExpenseRoute } from "./routes/expense.route";
import db from "./db";
import { StudentRoute } from "./routes/student.route";

const app = new App([new ExpenseRoute(), new StudentRoute()]);

db.getConnection((error, connection) => {
  if (error) return console.log(error);

  console.log("Database Connected");
});

app.listen();
