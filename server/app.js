/*
 * @Author: renpengfei 
 * @Date: 2018-06-21 17:19:39 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-06-21 17:46:00
 */

const Koa = require('koa')
const app = new Koa()
app.use(async(ctx) => {
    ctx.body = 'hello koa2'
})
app.listen(8888)
console.log('server run at 8888')