import axios from "axios";

export const get = (url, option = null, params) => {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params,
                headers: option || {
                    ApiKey: 12345,
                },
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(JSON.stringify(err));
            });
    });
};

export const post = (url, option, params) => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params, option)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(JSON.stringify(err));
            });
    });
};

// get使用範例
// export const getITFRPRIncNo = (token: string, location: string) => {
//     return new Promise<any>((resolve, reject) => {
//         var option = {
//             'Content-Type': 'application/json',
//             'Authorization': `AR-JWT ${token}`
//         }
//         get(`${location}`, option, null).then((result: any) => {
//             resolve(result);
//         }).catch((err: any) => {
//             reject(err);
//         });
//     });
// }
