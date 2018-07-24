/*
 * @Author: renpengfei
 * @Date: 2018-07-04 09:57:59
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-24 16:59:13
 */
import React from 'react'
import { getInfo } from '../../api/login.api'
import { withRouter } from 'react-router-dom'
import { logoData } from '../../redux/login.redux'
import { connect } from 'react-redux'
@withRouter
@connect(null,{ logoData })

class AuthRoute extends React.Component {
    componentDidMount() {
        const publicList = ['/login','/register']
        const pathName = this.props.location.pathname
        console.log(pathName)
        if (publicList.includes(pathName)) {
            return 
        }
        this.getUserInfo()
    }
    async getUserInfo() {
        try {
            let data = await getInfo()
            console.log('getInfo',data)
            if (data && data.code === 0) {
                this.props.logoData(data)
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