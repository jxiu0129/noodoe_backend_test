import express from "express";
import weather from "../controllers/weather.controller";

const router = express.Router();

router
    .route("/TaiNewTaiTao/List")
    .get(weather.getTaipeiNewtaipeiTaoyuanWeatherList);

export default router;
