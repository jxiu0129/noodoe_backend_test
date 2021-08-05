import User from "../models/User.model";

export const insert = (data) => {
    const { email, password } = data;
    const insertObj = {
        email,
        password,
    };
    return new Promise((resolve, reject) => {
        const saveObj = new User(insertObj);
        saveObj.save((err, doc) => {
            if (err) reject(err);
            resolve(doc);
        });
    });
};

export const search_all = () => {
    return new Promise((resolve, reject) => {
        User.find({}).exec((err, docs) => {
            if (err) reject(err);
            resolve(docs);
        });
    });
};

export const search_by_email = (email) => {
    return new Promise((resolve, reject) => {
        User.findOne({ email }).exec((err, docs) => {
            if (err) reject(err);
            resolve(docs);
        });
    });
};

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
