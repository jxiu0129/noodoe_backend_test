import argon2 from "argon2";
import { insert, search_all, search_by_email } from "../dao/user.dao";

const register = (body) => {
    const { email, password } = body;
    return new Promise(async (resolve, reject) => {
        try {
            if (email.indexOf("@") === -1) {
                reject("email格式不正確");
            }
            const user = await search_by_email(email);
            if (user) reject("該email已註冊過");

            const hashedPwd = await argon2.hash(password);
            const data = await insert({ email, password: hashedPwd });
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
};

const login = (body) => {
    const { email, password } = body;
    return new Promise(async (resolve, reject) => {
        try {
            const user = await search_by_email(email);
            if (!user) reject("該使用者尚未註冊");
            const isVerified = await argon2.verify(user.password, password);
            if (!isVerified) {
                reject("密碼錯誤");
            } else {
                resolve(`${email}登入成功`);
            }
        } catch (error) {
            reject(error);
        }
        // if (password !== )
    });
};

export default {
    register,
    login,
};
