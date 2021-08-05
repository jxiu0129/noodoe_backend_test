import logic from "../logic/user.logic";
import { responseSuccess, responseErr } from "../utils";

const register = (req, res, next) => {
    logic
        .register(req.body)
        .then((result) => {
            responseSuccess(res, 200, "jxiu", result, "register");
        })
        .catch((err) => {
            responseErr(res, 500, "jxiu", err, "register");
        });
};
const login = (req, res, next) => {
    logic
        .login(req.body)
        .then((result) => {
            responseSuccess(res, 200, "jxiu", result, "login");
        })
        .catch((err) => {
            responseErr(res, 500, "jxiu", err, "login");
        });
};

export default {
    register,
    login,
};
