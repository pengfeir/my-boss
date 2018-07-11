/*
 * @Author: renpengfei 
 * @Date: 2018-06-21 17:46:09 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-11 16:09:06
 */
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/imooc-chat') //连接本地数据库

const models = {
    user: {
        'user': { type: String,require: true },
        'pwd': { type: String,require: true },
        'type': { type: String,require: true },
        // 头像
        'avator': { type: String },
        // 个人简介或职位简介
        'desc': { type: String },
        // 职位名称
        'title': { type: String },
        'company': { type: String },
        'money': { type: String },
    },
    chat: {

    }
}
for (let m in models) {
    mongoose.model(m,new mongoose.Schema(models[m]))
}
module.exports = {
    getModule: function(name) {
        return mongoose.model(name)
    }
}