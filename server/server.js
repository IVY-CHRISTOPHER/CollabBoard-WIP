const express = require("express");
const cors = require("cors");
const app = express();
// const cookieParser = require("cookie-parser");
const port = 8000;

require('dotenv').config();
require("./config/mongoose.config");

// app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json(), express.urlencoded({ extended: true }));


app.listen(port, () => console.log(`server live on port ${port}`));