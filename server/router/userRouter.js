/*
 * @Author: renpengfei
 * @Date: 2018-07-09 15:59:45
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-24 17:01:30
 */
const Router = require('koa-router')()
let userController = require('../controllers/userController')
Router.post('/getInfo', userController.getInfo)
Router.post('/create', userController.create)
Router.post('/del', userController.del)
Router.post('/login', userController.login)
module.exports = Router