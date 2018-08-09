/*
 * @Author: renpengfei 
 * @Date: 2018-07-24 10:59:15 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-08-09 11:33:53
 */
import { login,updateInfo ,create } from '../api/login.api'
import { getRedirectPath } from '../util/util'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'
const ERROR_MSG = 'ERROR_MSG'
const initState = {
    redirectTo: '',
    msg: '',
    user: '',
    type: '',
    avatar: '',
}
// reducter
export const user = (state = initState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
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
export const authSuccess = (obj) => {
    const { pwd,...data } = obj
    return { data: data, type: AUTH_SUCCESS }
}
export const update = (params) => {
    console.log('reduxdata',params)
    return async dispatch => {
       let data = await updateInfo(params)
       if (data) {
        if (data.code === 0 && data.message === 'success') {
            dispatch(authSuccess(data.data))
        } else {
            dispatch(errorMsg(data.message))
        }
       }
    }
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
            console.log(data)
            if (data) {
                if (data.code === 0 && data.message === 'success') {
                    console.log(888888)
                    dispatch(authSuccess(data.data))
                } else {
                    dispatch(errorMsg(data.message))
                }
            }
        }

    }
}
export const register = ({ user, pwd, repeadpwd, type }) => {
    if (!user || !pwd || !String(type)) {
        return errorMsg('用户名密码必须输入')
    } else if (pwd !== repeadpwd) {
        return errorMsg('两次输入密码不一致！')
    } else {
        return async dispatch => {
            let params = {
                user,
                pwd,
                type
            }
            let data = await create(params)
            if (data) {
                if (data.code === 0 && data.message === 'success') {
                    dispatch(authSuccess({ user, pwd,type }))
                } else {
                    dispatch(errorMsg(data.message))
                }
            }
        }

    }
}