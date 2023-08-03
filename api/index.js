import Express from "express";
const app = Express();
import userRoutes from "./routes/users.js";

app.use("/api/users", userRoutes)

app.listen(8800, ()=> {
    console.log("API")
});