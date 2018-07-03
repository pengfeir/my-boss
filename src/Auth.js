/*
 * @Author: renpengfei
 * @Date: 2018-07-02 18:15:28
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-03 11:18:15
 */
import React from 'react'
import { Redirect }
from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from './Auth.redux'
import { Button } from 'antd-mobile'
@connect(state => state.auth, { login })

class Auth extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.isAuth
                    ? <Redirect to='/dashboard/'/>
                    : null}
                <h2>暂无权限</h2>
                <Button onClick={this.props.login}>登陆</Button>
            </div>
        )

    }
}
export default Auth