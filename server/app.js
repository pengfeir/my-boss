/*
 * @Author: renpengfei
 * @Date: 2018-06-21 17:19:39
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-09 16:27:29
 */

const Koa = require('koa')
const app = new Koa()

let userRouter = require('./router/userRouter')
let responseFormatter = require('./middlewares/responseFormatter')

app.use(responseFormatter)
app.use(userRouter.routes())
console.log('das')
app.listen(8888)
