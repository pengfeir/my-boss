/*
 * @Author: renpengfei
 * @Date: 2018-06-21 17:19:39
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-06 11:22:02
 */

const Koa = require('koa')
const app = new Koa()
const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)
const model = require('./model')
const Chat = model.getModule('chat')
io.on('connection', (socket) => {
    socket
        .on('sendmsg', function (data) {
            console.log('sendmsg',data)
            const { from, to, msg } = data
            const chatid = [from, to]
                .sort()
                .join('_')
                console.log('from',from)
                console.log('to',to)
            Chat.create({
                chatid,
                from,
                to,
                content: msg
            }, (err, doc) => {
                console.log('doc',doc)
                io.emit('recvmsg', Object.assign({}, doc._doc))
            })
        })
    console.log('hello socket')
})
const bodyParse = require('koa-bodyparser')

let userRouter = require('./router/userRouter')
let responseFormatter = require('./middlewares/responseFormatter')
app.use(bodyParse())
app.use(responseFormatter)
app.use(userRouter.routes())
server.listen(8888, function () {
    console.log('server start at port 8888')
})
