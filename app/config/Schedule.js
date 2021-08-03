import schedule from "node-schedule";
import { get } from "../utils";

export const start = async () => {
    try {
        // const test = await get(
        //     `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001`,
        //     null,
        //     { Authorization: process.env.WEATHER_TOKEN }
        // );

        // // console.log(test.records.location);
        // const { location } = test.records;
        // const legalLocation = ["臺北市", "桃園", "新北市"];
        // for (let l of location) {
        //     if (legalLocation.includes(l.parameter[0].parameterValue)) {
        //         // 台北+新北 共16比
        //         console.log(l);
        //     }
        //     continue;
        //     // console.log(l.locationName);
        // }

        // 每小時的第五分鐘會執行 ex: 12:05, 16:05
        schedule.scheduleJob("5 * * * *", async () => {
            const now = new Date();
            console.log(
                "🚀 ~ file: Schedule.js ~ line 7 ~ schedule.scheduleJob ~ now",
                now
            );
        });
    } catch (err) {
        console.error("Error in schedule start", err);
    }
};
