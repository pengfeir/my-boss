/*
 * @Author: renpengfei
 * @Date: 2018-07-09 17:03:47
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-09 18:43:58
 */
import { getUser } from '../api/login.api'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const initState = {
    isAuth: '',
    msg: '',
    user: '',
    pwd: '',
    repeadpwd: '',
    type: ''
}
// reducter
export const user = (state = initState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                msg: '',
                isAuth: true,
                ...action.data
            }
        case ERROR_MSG:
            return {
                ...state,
                msg: action.msg,
                isAuth: false
            }
        default:
            return state
    }
}
export const registerSuccess = (data) => {
    return { data: data, type: REGISTER_SUCCESS }
}
export const errorMsg = (msg) => {
    return { msg, type: ERROR_MSG }
}
export const register = ({ user, pwd, repeadpwd, type }) => {
    if (!user || !pwd || !String(type)) {
        return errorMsg('用户名密码必须输入')
    } else if (pwd !== repeadpwd) {
        console.log(2222)
        return errorMsg('两次输入密码不一致！')
    } else {
        return async dispatch => {
            let data = await getUser()
            console.log(1111, data)
            if (data) {
                if (data.code === 0 && data.message === 'success') {
                    dispatch(registerSuccess({ user, pwd, repeadpwd,type }))
                } else {
                    dispatch(errorMsg(data.data.msg))
                }
            }
        }

    }
}