/*
 * @Author: renpengfei
 * @Date: 2018-07-04 09:57:59
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-10 15:12:00
 */
import React from 'react'
import { getUser } from '../../api/login.api'
import { withRouter } from 'react-router-dom'
@withRouter

class AuthRoute extends React.Component {
    componentDidMount() {
        const publicList = ['/login','/register']
        const pathName = this.props.location.pathname
        if (publicList.includes(pathName)) {
            return 
        }
        this.getUserInfo()
    }
    async getUserInfo() {
        try {
            let data = await getUser()
            console.log(data)
            if (data && data.code === 0) {
                this.props.history.push('/login')
                console.log(this.props)
            } else {
                this.props.history.push('/login')
            }
        } catch (err) {
            console.log(err)
        }

    }
    render() {
        return null
    }
}
export default AuthRoute