/*
 * @Author: renpengfei 
 * @Date: 2018-07-04 09:57:59 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-04 11:00:29
 */
import React from 'react'
import { getUser } from '../../api/login.api'

class AuthRoute extends React.Component {
    componentDidMount() {
        this.getUserInfo()
    }
    async getUserInfo() {
        console.log(222)
        let data = await getUser()
        console.log(data)
    }
    render() {
        return <div>需要跳转的地方</div>
    }
}
export default AuthRoute