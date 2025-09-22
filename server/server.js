require('dotenv').config();
console.log("SECRET_KEY:", process.env.SECRET_KEY);
console.log("SERVER_PORT: ", process.env.SERVER_PORT)
import "./config/mongoose.config";
import './config/jwt.config';

import express, { json, urlencoded } from "express";
import cors from "cors";
const app = express();
import cookieParser from "cookie-parser";
const port = process.env.SERVER_PORT;


app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(json(), urlencoded({ extended: true }));

import UserRoutes from './routes/user.routes';
UserRoutes(app)
import ProjectRoutes from './routes/project.routes';
ProjectRoutes(app)
import MainTaskRoutes from './routes/main-task.routes';
MainTaskRoutes(app)
import SubTaskRoutes from './routes/sub-task.routes';
SubTaskRoutes(app)

app.listen(port, () => console.log(`server live on port ${port}`));