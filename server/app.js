/*
 * @Author: renpengfei
 * @Date: 2018-06-21 17:19:39
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-11 18:43:30
 */

const Koa = require('koa')
const app = new Koa()
const bodyParse = require('koa-bodyparser')

let userRouter = require('./router/userRouter')
let responseFormatter = require('./middlewares/responseFormatter')
app.use(bodyParse())
app.use(responseFormatter)
app.use(userRouter.routes())
app.listen(8888,function() {
    console.log('server start at port 8888')
})
