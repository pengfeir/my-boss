/*
 * @Author: renpengfei
 * @Date: 2018-06-21 17:19:39
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-11-21 17:09:11
 */

const Koa = require('koa')
const app = new Koa()
const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)
io.on('connection', (socket) => { 
    socket.on('sendmsg',function(data) {
        console.log(data)
        io.emit('recvmsg',data)
    })
    console.log('hello socket')
})
const bodyParse = require('koa-bodyparser')

let userRouter = require('./router/userRouter')
let responseFormatter = require('./middlewares/responseFormatter')
app.use(bodyParse())
app.use(responseFormatter)
app.use(userRouter.routes())
server.listen(8888,function() {
    console.log('server start at port 8888')
})
