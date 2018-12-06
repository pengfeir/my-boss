/*
 * @Author: renpengfei
 * @Date: 2018-12-05 11:41:10
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-06 11:23:03
 */
import io from 'socket.io-client'
import { msgList } from '../api/login.api'
const socket = io('ws://localhost:8888')
const MSG_LIST = 'MSG_LIST'
// 读取信息
const MSG_RECV = 'MSG_RECV'
// 标记已读 const MSG_READ = 'MSG_READ'
const initState = {
    chatmsg: [],
    unread: 0
}
export const chat = (state = initState, action) => {
    switch (action.type) {
        case MSG_LIST:
            return {
                ...state,
                chatmsg: action.payload,
                unread: action
                    .payload
                    .filter(v => !v.read)
                    .length
            }
        default:
            return state
    }
}
const list = (msg) => {
    return { type: MSG_LIST, payload: msg }
}
const msgRecv = (msg) => {
    return { type: MSG_RECV, payload: msg }
}
export const getMsgList = () => {
    return async dispatch => {
        let data = await msgList()
        if (data.code === 0 && data.message === 'success') {
            dispatch(list(data.data))
        }
    }
}
export const sendMsg = (from, to, msg) => {
    console.log('chat', from, to, msg)
    return async dispatch => {
        socket.emit('sendmsg', { from, to, msg })
    }
}
export const recvMsg = () => {
    return dispatch => {
        socket.on('recvmsg', (data) => {
            console.log('recvMsg', data)
            dispatch(msgRecv(data))
        })
    }
}