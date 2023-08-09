import mysql from "mysql";

//connect DB
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "erasmus",
});
