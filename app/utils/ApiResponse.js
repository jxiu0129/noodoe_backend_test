//prettier-ignore
/**
 * 標準統一回傳成功
 * @param {*} res
 * @param {*} statusCode
 * @param {*} user
 * @param {*} objMsg
 * @param {*} functionName
 */
export const responseSuccess = (res, message , statusCode = 200, user = 'system', objMsg, functionName = 'system') => {
    try {
        res.status(statusCode).json(new SuccessResponseModel(message, !objMsg || (isCamel ? camelcaseKeys(objMsg) : objMsg)));
    } catch (error) {
    }
};

//prettier-ignore
/**
 * 標準統一回傳錯誤
 * @param {*} res
 * @param {*} errObj
 * @param {*} functionName
 */
export const responseErr = (res, statusCode = 400, user = 'system', errObj, functionName = 'system') => {
    try {
        statusCode = errObj.status ? errObj.status : statusCode;
        var message = errObj.message ? errObj.message : errObj;
        //// LogService.createErrLog(res.req, errObj);
        res.status(statusCode).json(new ErrorModel(message, statusCode));
    } catch (error) {

    }
};
