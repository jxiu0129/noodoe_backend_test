import express from "express";
import weather from "./weather.route";

const router = express.Router();

router.use("/Weather", weather);

export default router;
