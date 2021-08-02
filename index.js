import express from "express";
// import createError from "http-errors";
// import path from "path";
// import cookieParser from "cookie-parser";

import dotenv from "dotenv";
import connectDB from "./connection";
// import routes from "./app/routes";

dotenv.config();
const app = express();

// connnect to mongodb
connectDB();

app.get("/", (req, res) => {
    res.send("hello world");
});

// app.use(
//     "/api",
//     (req, res, next) => {
//         // api log can be here
//         // validation
//         next();
//     },
//     routes
// );
app.get("*", (_, res) => res.status(404).send("Not Found"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, (res) => {
    console.log(`listening on port ${PORT}`);
});
