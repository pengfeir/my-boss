/*
 * @Author: renpengfei
 * @Date: 2018-07-09 15:59:45
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-08-07 22:43:51
 */
const Router = require('koa-router')()
let userController = require('../controllers/userController')
Router.post('/getInfo', userController.getInfo)
Router.post('/create', userController.create)
Router.post('/del', userController.del)
Router.post('/login', userController.login)
Router.post('/update', userController.update)
module.exports = Router