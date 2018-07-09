/*
 * @Author: renpengfei
 * @Date: 2018-07-09 16:41:24
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-09 16:47:43
 */
const errorNames = require('./errorName')
class ApiError extends Error {
    constructor(error_name) {
        super()
        var errorInfo = errorNames.getErrorInfo(error_name)
        this.name = error_name
        this.code = errorInfo.code
        this.message = errorInfo.message
    }
}
module.exports = ApiError