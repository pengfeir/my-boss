/*
 * @Author: renpengfei
 * @Date: 2018-06-21 17:46:09
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-15 21:08:31
 */
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/imooc-chat') //连接本地数据库

const models = {
    user: {
        'user': {
            'type': String,
            require: true
        },
        'pwd': {
            'type': String,
            require: true
        },
        'type': {
            'type': String,
            require: true
        },
        // 头像
        'avatar': {
            'type': String
        },
        // 个人简介或职位简介
        'desc': {
            'type': String
        },
        // 职位名称
        'title': {
            'type': String
        },
        'company': {
            'type': String
        },
        'money': {
            'type': String
        }
    },
    chat: {
        'chatid': {
            'type': String
        },
        'from': {
            'type': String,
            'require': true
        },
        'to': {
            'type': String,
            'require': true
        },
        'read': {
            'type': Boolean,
            'require': true,
            'default': false
        },
        'content': {
            'type': String,
            'require': true,
            'default': ''
        },
        'create_time': {
            'type': Number,
            'default': new Date().getTime()
        },
    }
}
for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}
module.exports = {
    getModule: function (name) {
        return mongoose.model(name)
    }
}