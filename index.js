import express from "express";
import bodyparser from "body-parser";
// import createError from "http-errors";
// import path from "path";
// import cookieParser from "cookie-parser";

import dotenv from "dotenv";
import { connectDB, start } from "./app/config";
import routes from "./app/routes";

dotenv.config();
const app = express();

app.use(bodyparser.json({ limit: "50mb" }));
app.use(bodyparser.urlencoded({ limit: "50mb", extended: false }));

app.get("/", (req, res) => {
    res.send("hello world");
});

app.use(
    "/api",
    (req, res, next) => {
        // api log can be here
        // validation
        next();
    },
    routes
);
app.get("*", (_, res) => res.status(404).send("Not Found"));

// connnect to mongodb
connectDB().then(() => {
    // schedule here
    start();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (res) => {
    console.log(`listening on port ${PORT}`);
});
