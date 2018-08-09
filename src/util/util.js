/*
 * @Author: renpengfei 
 * @Date: 2018-07-12 14:41:42 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-08-08 18:23:03
 */
export const getRedirectPath = ({ type,avatar }) => {
    let url = (Number(type) === 0) ? '/boss' : '/genius'
    if (!avatar) {
        url += 'info'
    }
    return url
}