/*
 * @Author: renpengfei
 * @Date: 2018-07-09 16:25:16
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-12 17:29:10
 */
/**
 * 在app.use(router)之前调用
 */
var response_formatter = async(ctx, next) => {
    //先去执行路由
    await next()
    //如果有返回数据，将返回数据添加到data中
    if (ctx.body) {
        if (ctx.body.data) {
            ctx.body = {
                code: ctx.body.code || 0,
                message: ctx.body.message || 'success',
                data: ctx.body.data
            }
        } else {
            ctx.body = {
                code: ctx.body.code || 0,
                message: ctx.body.message || 'success'
            }
        }
    } else {
        ctx.body = {
            code: 2,
            message: 'error'
        }
    }
}

module.exports = response_formatter
