/*
 * @Author: renpengfei
 * @Date: 2018-12-05 11:41:10
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-12 16:22:29
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
    users: {},
    unread: 0
}
export const chat = (state = initState, action) => {
    switch (action.type) {
        case MSG_LIST:
            return {
                ...state,
                users: action.payload.users,
                chatmsg: action.payload.msg,
                unread: action
                    .payload
                    .msg
                    .filter(v => (!v.read) && (v.to === action.payload.userid))
                    .length
            }
        case MSG_RECV:
        const n = action.payload.to === action.userid ? 1 : 0
            return {
                ...state,
                chatmsg: [
                    ...state.chatmsg,
                    action.payload
                ],
                unread: n + state.unread
            }
        default:
            return state
    }
}
const messageList = (msg, users, userid) => {
    return {
        type: MSG_LIST,
        payload: {
            msg,
            users,
            userid
        }
    }
}
const msgRecv = (msg,userid) => {
    return { userid,type: MSG_RECV, payload: msg }
}
export const getMsgList = () => {
    return async(dispatch, getState) => {
        let data = await msgList()
        if (data.code === 0 && data.message === 'success') {
            const userid = getState().user._id
            dispatch(messageList((data.data.msg), data.data.users, userid))
        }
    }
}
export const sendMsg = (from, to, msg) => {
    return async dispatch => {
        socket.emit('sendmsg', { from, to, msg })
    }
}
export const recvMsg = () => {
    return (dispatch,getState) => {
        socket.on('recvmsg', (data) => {
            const userid = getState().user._id
            dispatch(msgRecv(data,userid))
        })
    }
}