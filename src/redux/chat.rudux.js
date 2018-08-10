/*
 * @Author: renpengfei
 * @Date: 2018-08-10 14:58:51
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-08-10 16:02:29
 */
import { list } from '../api/login.api'

const USER_LIST = 'USER_LIST'
const initData = {
    userList: []
}
export const chatuser = (state = initData, action) => {
    switch (action.type) {
        case USER_LIST:
            return {
                ...state,
                userList: action.payload
            }
        default:
            return state

    }
}
const userList = (data) => {
    return { type: USER_LIST, payload: data }
}
export const getUserList = (type) => {
    
    return async dispatch => {
        let params = {
            type
        }
        let data = await list(params)
        if (data.code === 0 && data.message === 'success') {
            dispatch(userList(data.data))
        }
    }
}