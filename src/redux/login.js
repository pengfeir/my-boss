/*
 * @Author: renpengfei 
 * @Date: 2018-07-02 18:39:20 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-03 15:20:52
 */
const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'
// reducer
export function counter(state = 0, action) {
    switch (action.type) {
        case ADD_GUN:
            return state + 1
        case REMOVE_GUN:
            return state - 1
        default:
            return 10

    }
}
export function addGun() {
    return { type: ADD_GUN }
}
export function removeGun() {
    return { type: REMOVE_GUN }
}
export function addGunAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun())
        }, 3000)
    }
}