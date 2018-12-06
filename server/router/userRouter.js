/*
 * @Author: renpengfei
 * @Date: 2018-07-09 15:59:45
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-05 20:56:20
 */
const Router = require('koa-router')()
let userController = require('../controllers/userController')
Router.post('/getInfo', userController.getInfo)
Router.post('/create', userController.create)
Router.post('/del', userController.del)
Router.post('/login', userController.login)
Router.post('/update', userController.update)
Router.post('/list', userController.list)
Router.post('/getMsgList', userController.getMsgList)
module.exports = Router