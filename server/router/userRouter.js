/*
 * @Author: renpengfei
 * @Date: 2018-07-09 15:59:45
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-09 16:31:46
 */
const Router = require('koa-router')()
// const router = new Router()
let userController = require('../controllers/userController')
Router.get('/getuserinfo', userController.getUser)
module.exports = Router