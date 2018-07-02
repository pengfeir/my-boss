/*
 * @Author: renpengfei 
 * @Date: 2018-07-02 18:15:28 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-02 18:53:09
 */
import React from 'react'
import { connect } from 'react-redux'
import { login } from 'Auth.redux'

@connect(state => state.auth,{ login })

class Auth extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <h2>暂无权限</h2>
    }
}
export default Auth