import Weather from "../models/Weather.model";

export const insert = (data) => {
    const { locationName, stationID, obsTime, weatherElement, obsLocation } =
        data;
    const insertObj = {
        locationName,
        stationID,
        obsTime,
        weatherElement,
        obsLocation,
    };
    return new Promise((resolve, reject) => {
        const saveObj = new Weather(insertObj);
        saveObj.save((err, doc) => {
            if (err) reject(err);
            resolve(doc);
        });
    });
};

// export const search_all = () => {
//     return new Promise((resolve, reject) => {
//         con_backend
//             .find({})
//             .exec((err, docs) => {
//                 if (err) reject(errObj(err, 400, 'search_business'));
//                 resolve(docs);
//             });
//     });
// };

// export const search_by_key = (key) => {
//     return new Promise((resolve, reject) => {
//         con_backend
//             .find({key: key})
//             .exec((err, docs) => {
//                 if (err) reject(errObj(err, 400, 'search_business'));
//                 if (docs && Array.isArray(docs) && docs[0]) resolve(docs[0]);
//                 resolve(null);
//             });
//     });
// };
