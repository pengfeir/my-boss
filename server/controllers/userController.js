/*
 * @Author: renpengfei
 * @Date: 2018-07-09 15:56:38
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-11 18:23:26
 */
const model = require('../model')
const User = model.getModule('user')
exports.getUser = async(ctx, next) => {
    User
        .find({}, function (err, doc) {
            console.log(doc)
            ctx.body = doc
        })
    console.log(2222)
    // ctx.body = {     user: '鹏飞',     age: 18 }
}
exports.create = async(ctx, next) => {
    // 请求体
    const { user, pwd, type } = ctx.request.body
    console.log(ctx.request.body)
    User.findOne({
        user
    }, function (err, doc) {
        if (doc) {
            ctx.body = {
                code: 1,
                msg: '用户名重复'
            }
        }
        User
            .create({
                user,
                pwd,
                type
            }, function (err, doc) {
                if (err) {
                    ctx.body = {
                        code: 2,
                        msg: '后端出错了',
                        test: 3333
                    }
                } else {
                    ctx.body = {
                        code: 8888,
                        test: 2222
                    }
                    console.log(10000, ctx.body)
                }
            })
    })

}