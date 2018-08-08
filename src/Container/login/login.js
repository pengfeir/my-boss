/*
 * @Author: renpengfei
 * @Date: 2018-07-03 15:09:17
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-08-07 16:33:36
 */
import React from 'react'
import Logo from '../../Component/logo/logo'
import { Redirect } from 'react-router-dom'
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile'
import { connect } from 'react-redux'
import { logining } from '../../redux/login.redux'

@connect(state => state.user,{ logining })
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.register = this.register.bind(this)
    }
    handleChange(key, val) {
        this.setState({ [key]: val })
    }
    handleLogin() {
        this.props.logining(this.state)
    }
    register() {
        this
            .props
            .history
            .push('/register')
    }
    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo></Logo>
                <List>
                    <WhiteSpace/>
                    <InputItem
                        value={this.state.user}
                        onChange={v => this.handleChange('user', v)}>用户名</InputItem>
                    <WhiteSpace/>
                    <InputItem
                        value={this.state.pwd}
                        type="password"
                        onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
                </List>
                <WhiteSpace/>
                <WingBlank>
                    <Button type="primary" onClick={this.handleLogin}>登陆</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login