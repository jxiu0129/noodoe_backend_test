import { search_all } from "../dao/weather.dao";

const getWeatherInfo = (district) => {
    return new Promise(async (resolve, reject) => {
        // resolve(district);
        const weatherData = await search_all();

        if (!district) {
            resolve(weatherData);
        } else {
            const filteredWeather = weatherData.filter(
                (w) => w.obsLocation.city === district
            );
            //因為沒要求所以就沒再整理資料格式
            resolve(filteredWeather);
        }
    });
};

export default {
    getWeatherInfo,
};
