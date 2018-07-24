/*
 * @Author: renpengfei 
 * @Date: 2018-07-24 10:59:15 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-24 16:41:47
 */
import { login } from '../api/login.api'
import { getRedirectPath } from '../util/util'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'
const ERROR_MSG = 'ERROR_MSG'
const initState = {
    isAuth: '',
    msg: '',
    user: '',
    pwd: '',
}
// reducter
export const user = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                msg: '',
                isAuth: true,
                redirectTo: getRedirectPath(action.data),
                ...action.data
            }
        case LOAD_DATA:
            return {
                ...state,
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
export const loginSuccess = (data) => {
    return { data: data, type: LOGIN_SUCCESS }
}
export const errorMsg = (msg) => {
    return { msg, type: ERROR_MSG }
}
export const logoData = (userinfo) => {
    return { type: LOAD_DATA,data: userinfo }
}
export const logining = ({ user, pwd }) => {
    if (!user || !pwd) {
        return errorMsg('用户名密码必须输入')
    } else {
        return async dispatch => {
            let params = {
                user,
                pwd,
            }
            let data = await login(params)
            if (data) {
                if (data.code === 0 && data.message === 'success') {
                    dispatch(loginSuccess({ user, pwd }))
                } else {
                    dispatch(errorMsg(data.message))
                }
            }
        }

    }
}