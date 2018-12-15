/*
 * @Author: renpengfei
 * @Date: 2018-07-09 15:59:45
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-15 20:55:19
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
Router.post('/readMsg', userController.readMsg)
module.exports = Router