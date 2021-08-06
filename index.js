import express from "express";
import bodyparser from "body-parser";
import url from "url";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import cors from "cors";

import dotenv from "dotenv";
import { connectDB, start } from "./app/config";
import routes from "./app/routes";
import { verifyJwtToken } from "./app/utils";

dotenv.config();
const app = express();
app.use(cors());

// swagger
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
        const urlObj = url.parse(req.url, true);
        if (urlObj.pathname.indexOf("/User") !== -1) {
            next();
        } else {
            verifyJwtToken(req)
                .then(() => {
                    next();
                })
                .catch((err) => {
                    res.status(err.status || 403).json(err);
                });
        }
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
