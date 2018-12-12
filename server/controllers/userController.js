/*
 * @Author: renpengfei
 * @Date: 2018-07-09 15:56:38
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-12 16:21:55
 */
const model = require('../model')
const User = model.getModule('user')
const Chat = model.getModule('chat')
const md5 = require('../util/md5')
const _filter = {
    'pwd': 0,
    '_v': 0
}
exports.getInfo = async(ctx, next) => {
    const userid = ctx
        .cookies
        .get('userid')
    try {
        let data = await User.findOne({
            '_id': userid
        }, _filter)
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
        let data = await User.findOne({
            user,
            pwd: md5.md5pwd(pwd)
        }, _filter)
        console.log('data', data)
        if (data) {
            ctx
                .cookies
                .set('userid', data.id, { httpOnly: false })
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
            })
            ctx
                .cookies
                .set('userid', createData.id, { httpOnly: false })
            console.log('createData', createData)
            return ctx.body = {
                data: createData
            }
        }
    } catch (err) {
        console.log(err)
    }
}
exports.update = async(ctx, next) => {
    const userid = ctx
        .cookies
        .get('userid')
    if (!userid) {
        //
    } else {
        const body = ctx.request.body
        console.log('body', ctx.request.body)
        // 请求体
        try {
            let findData = await User.findByIdAndUpdate(userid, body)
            if (findData) {
                console.log('findData', findData)
                const data = {
                    user: findData.user,
                    type: findData.type,
                    ...ctx.request.body
                }
                return ctx.body = {
                    data: data
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

}
exports.list = async(ctx, next) => {
    const type = ctx.request.query
    console.log('type', type)
    // 请求体
    try {
        let findData = await User.find(type)
        if (findData) {
            const data = findData
            return ctx.body = {
                data: data
            }
        }
    } catch (err) {
        console.log(err)
    }

}
exports.getMsgList = async(ctx, next) => {
    try {
        var data = {}
        const userid = ctx
            .cookies
            .get('userid')
        let users = {}
        let userData = await User.find({})
        userData.forEach(v => {
            users[v._id] = {
                name: v.user,
                avatar: v.avatar
            }
        })
        let msg = await Chat.find({
            '$or': [
                {
                    from: userid
                }, {
                    to: userid
                }
            ]
        })
        data = {
            msg,
            users
        }
        return ctx.body = {
            data: data
        }
} catch (err) {
    console.log(err)
}

}