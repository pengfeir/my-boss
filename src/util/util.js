/*
 * @Author: renpengfei 
 * @Date: 2018-07-12 14:41:42 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-08-10 14:32:24
 */
export const getRedirectPath = ({ type,avatar }) => {
    let url = (Number(type) === 0) ? '/boss' : '/genius'
    console.log('avatar',avatar)
    console.log('avatar',url)
    if (!avatar) {
        url += 'info'
    }
    return url
}