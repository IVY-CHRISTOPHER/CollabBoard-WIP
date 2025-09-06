require('dotenv').config();
console.log("SECRET_KEY:", process.env.SECRET_KEY);
require("./config/mongoose.config");
require('./config/jwt.config');

const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const port = 8000;


app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json(), express.urlencoded({ extended: true }));

const UserRoutes = require('./routes/user.routes')
UserRoutes(app)
const ProjectRoutes = require('./routes/project.routes')
ProjectRoutes(app)
const MainTaskRoutes = require('./routes/main-task.routes')
MainTaskRoutes(app)
const SubTaskRoutes = require('./routes/sub-task.routes')
SubTaskRoutes(app)

app.listen(port, () => console.log(`server live on port ${port}`));