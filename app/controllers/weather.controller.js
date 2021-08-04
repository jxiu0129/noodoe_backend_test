import logic from "../logic/weather.logic";
import { responseSuccess, responseErr } from "../utils";

const getTaipeiNewtaipeiTaoyuanWeatherList = (req, res, next) => {
    logic
        .getWeatherInfo(req.query.district)
        .then((result) => {
            responseSuccess(
                res,
                "success",
                200,
                "jxiu",
                result,
                "getTaipeiNewtaipeiTaoyuanWeatherList"
            );
        })
        .catch((err) => {
            responseErr(
                res,
                500,
                "jxiu",
                err,
                "getTaipeiNewtaipeiTaoyuanWeatherList"
            );
        });
};

export default {
    getTaipeiNewtaipeiTaoyuanWeatherList,
};
