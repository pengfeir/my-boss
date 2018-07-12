/*
 * @Author: renpengfei 
 * @Date: 2018-07-12 14:41:42 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-12 15:31:33
 */
export const getRedirectPath = ({ type,avatar }) => {
    let url = (Number(type) === 0) ? '/boss' : '/genius'
    if (!avatar) {
        url += '/info'
    }
    return url
}