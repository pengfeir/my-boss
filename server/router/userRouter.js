/*
 * @Author: renpengfei
 * @Date: 2018-07-09 15:59:45
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-11 16:44:21
 */
const Router = require('koa-router')()
// const router = new Router()
let userController = require('../controllers/userController')
Router.get('/getuserinfo', userController.getUser)
Router.post('/create', userController.create)
module.exports = Router