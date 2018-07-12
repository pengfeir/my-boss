/*
 * @Author: renpengfei
 * @Date: 2018-07-09 15:59:45
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-12 11:44:59
 */
const Router = require('koa-router')()
let userController = require('../controllers/userController')
Router.get('/getuserinfo', userController.getUser)
Router.post('/create', userController.create)
module.exports = Router