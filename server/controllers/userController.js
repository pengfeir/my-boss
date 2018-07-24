/*
 * @Author: renpengfei
 * @Date: 2018-07-09 15:56:38
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-24 17:00:43
 */
const model = require('../model')
const User = model.getModule('user')
const md5 = require('../util/md5')
const _filter = { 'pwd': 0,'_v': 0 }
exports.getInfo = async(ctx, next) => {
    const userid = ctx.cookies.get('userid')
    console.log('userid',userid)
    try {
        let data = await User.findOne({ '_id': userid },_filter)
        console.log('getInfo',data)
        if (data) {
          return ctx.body = {
              data: data
          }
        } else {
          let errData = {
              message: '暂无数据',
              code: -1
          }
          return ctx.body = {
              code: errData.code,
              message: errData.message
          }
        }  
    } catch (err) {
        console.log(err)
    }
   
}
exports.del = async(ctx, next) => {
    await User
        .remove({}, function (err, doc) {})
        .then(data => {
            console.log(data)
            ctx.body = {
                data: data
            }
        })
}
exports.login = async(ctx, next) => {
    const { user, pwd } = ctx.request.body
    try {
        let data = await User
            .findOne({
                user,
                pwd: md5.md5pwd(pwd)
            },_filter)
          if (data) {
              ctx.cookies.set('userid',data.id)
            return ctx.body = {
                data: data
            }
          } else {
            let errData = {
                message: '用户名或者密码错误',
                code: -1
            }
            return ctx.body = {
                code: errData.code,
                message: errData.message
            }
          }  
    } catch (err) {
        console.log(err)
    }

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
            },_filter)
            console.log('createData', createData)
            return ctx.body = {
                data: createData
            }
        }
    } catch (err) {
        console.log(err)
    }
}