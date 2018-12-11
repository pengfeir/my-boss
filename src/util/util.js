/*
 * @Author: renpengfei 
 * @Date: 2018-07-12 14:41:42 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-11 14:15:25
 */
export const getRedirectPath = ({ type,avatar }) => {
    let url = (Number(type) === 0) ? '/boss' : '/genius'
    if (!avatar) {
        url += 'info'
    }
    return url
}
export const getChatId = (userId,targetId) => {
    return [userId,targetId].sort().join('_')
}