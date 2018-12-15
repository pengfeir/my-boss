/*
 * @Author: renpengfei
 * @Date: 2018-12-05 11:41:10
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-15 21:37:38
 */
import io from 'socket.io-client'
import { msgList, readmsgList } from '../api/login.api'
const socket = io('ws://localhost:8888')
const MSG_LIST = 'MSG_LIST'
// 读取信息
const MSG_RECV = 'MSG_RECV'
const MSG_READ = 'MSG_READ'
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
            const n = action.payload.to === action.userid
                ? 1
                : 0
            return {
                ...state,
                chatmsg: [
                    ...state.chatmsg,
                    action.payload
                ],
                unread: n + state.unread
            }
        case MSG_READ:
        const { from, number } = action.payload
        return { ...state,chatmsg: state.chatmsg.map(v => ({ ...v,read: from === v.from ? true : v.read })),unread: state.unread - number }
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
const msgRecv = (msg, userid) => {
    return { userid, type: MSG_RECV, payload: msg }
}
const msgRead = ({ from, userid, number }) => {
    return {
        type: MSG_READ,
        payload: {
            from,
            userid,
            number
        }
    }
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
    return (dispatch, getState) => {
        socket.on('recvmsg', (data) => {
            const userid = getState().user._id
            dispatch(msgRecv(data, userid))
        })
    }
}
export const readMsg = (from) => {
    return async(dispatch, getState) => {
        let params = {
            from: from
        }
        let data = await readmsgList(params)
        if (data.code === 0 && data.message === 'success') {
            const userid = getState().user._id
            dispatch(msgRead({ userid, from, number: data.data.num }))
        }
    }
}