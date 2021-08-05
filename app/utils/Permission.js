import jwt from "jsonwebtoken";

export const generateJwtToken = (obj) => {
    const { email, id } = obj;
    return new Promise(async (resolve, reject) => {
        try {
            const payload = {
                email,
                userId: id,
            };
            const token = jwt.sign(
                {
                    payload,
                    exp:
                        Math.floor(Date.now() / 1000) +
                        60 * parseInt(process.env.JWT_TOKEN_EXPIRED), // 單位為秒
                },
                process.env.JWT_TOKEN_KEY
            );
            resolve(token);
        } catch (err) {
            reject(err);
        }
    });
};

export const verifyJwtToken = (req) => {
    return new Promise((resolve, reject) => {
        const token =
            req.body.token || req.query.token || req.headers["x-access-token"];
        if (token) {
            jwt.verify(token, process.env.JWT_TOKEN_KEY, (err, decoded) => {
                if (err) {
                    console.error("jwt verified error", err);
                    reject(err);
                } else {
                    const { email, userId } = decoded.payload;
                    req.headers["token"] = token;
                    req["email"] = email;
                    req["userId"] = userId;
                    //// req["userIpStation"] = decoded.payload.userIpStation || [];
                    console.log("jwt decoded : ", decoded);
                    resolve(decoded);
                }
            });
        } else {
            reject("No token provided");
        }
    });
};
