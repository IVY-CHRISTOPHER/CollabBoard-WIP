import {} from "dotenv/config";
console.log("SECRET_KEY:", process.env.SECRET_KEY);
console.log("SERVER_PORT: ", process.env.SERVER_PORT);
import "./config/mongoose.config.js";
import "./config/jwt.config.js";

import express, { json, urlencoded } from "express";
import cors from "cors";
const app = express();
import cookieParser from "cookie-parser";
const port = process.env.SERVER_PORT;

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(json(), urlencoded({ extended: true }));

import UserRoutes from "./routes/user.routes.js";
UserRoutes(app);
import ProjectRoutes from "./routes/project.routes.js";
ProjectRoutes(app);
import MilestoneRoutes from "./routes/milestone.routes.js";
MilestoneRoutes(app);
import TaskRoutes from "./routes/task.routes.js";
TaskRoutes(app);

app.listen(port, () => console.log(`server live on port ${port}`));