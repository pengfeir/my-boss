/*
 * @Author: renpengfei
 * @Date: 2018-07-02 16:51:10
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-03 10:05:04
 */
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
// reducer
export function auth(state = {
    isAuth: false,
    user: '李云龙'
}, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuth: true
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false
            }
        default:
            return state

    }
}
export function login() {
    return { type: LOGIN }
}
export function logout() {
    return { type: LOGOUT }
}