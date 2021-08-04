import mongoose, { Schema } from "mongoose";

const WeatherSchema = new Schema({
    locationName: { type: String, required: true },
    stationID: { type: String, required: true },
    obsTime: { type: Date, required: true },
    weatherElement: {
        ELEV: String,
        WDIR: String,
        WDSD: String,
        TEMP: String,
        HUMD: String,
        PRES: String,
        TWENTYFOUR_R: String,
        H_FX: String,
        H_XD: String,
        H_FXT: String,
        H_F10: String,
        H_10D: String,
        H_F10T: String,
        H_UVI: String,
        D_TX: String,
        D_TXT: String,
        D_TN: String,
        D_TNT: String,
        D_TS: String,
        VIS: String,
        Weather: String,
    },
    obsLocation: {
        city: String,
        city_id: String,
        town: String,
        town_id: String,
    },
    createAt: { type: Date, default: Date.now },
});
WeatherSchema.set("collection", "Weather");

// const Model = mongoose.model("Weather", WeatherSchema);

// Model.insert = (data, callback) => {
//     Model(data).save((err, rsp) => {
//         callback(err, rsp);
//     });
// };

// Model.delete = (data, callback) => {
//     Model.remove(data, (err, rsp) => {
//         callback(err, rsp);
//     });
// };

// Model.list = (data, callback) => {
//     Model.find(data).exec((err, rsp) => {
//         callback(err, rsp);
//     });
// };

// Model.detail = (data, callback) => {
//     Model.findOne(data).exec((err, rsp) => {
//         callback(err, rsp);
//     });
// };

// Model.has = (data, callback) => {
//     Model.findOne(data, (err, rsp) => {
//         if (rsp == null) {
//             callback(err, false);
//         } else {
//             callback(err, true);
//         }
//     });
// };

export default mongoose.model("Weather", WeatherSchema);
