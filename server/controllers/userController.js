/*
 * @Author: renpengfei
 * @Date: 2018-07-09 15:56:38
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-12 17:33:23
 */
const model = require('../model')
const User = model.getModule('user')
const md5 = require('../util/md5')
exports.getUser = async(ctx, next) => {
    await User
        .find({}, function (err, doc) {})
        .then(data => {
            console.log(data)
            ctx.body = {
                data: data
            }
        })
}
exports.create = async(ctx, next) => {
    // 请求体
    const { user, pwd, type } = ctx.request.body
    try {
        let findData = await User.findOne({ user })
        if (findData) {
            let errData = {
                message: '该用户名已存在',
                code: -1
            }
            return ctx.body = {
                code: errData.code,
                message: errData.message
            }
        } else {
            let createData = await User.create({
                user,
                pwd: md5.md5pwd(pwd),
                type
            })
            console.log('createData', createData)
            return ctx.body = {
                data: createData
            }
        }
    } catch (err) {
        console.log(err)
    }
}