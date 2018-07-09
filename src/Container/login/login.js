/*
 * @Author: renpengfei
 * @Date: 2018-07-03 15:09:17
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-09 15:49:51
 */
import React from 'react'
import Logo from '../../Component/logo/logo'
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile'
import { getUser } from '../../api/login.api'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: ''
        }
        this.register = this
            .register
            .bind(this)
        this.login = this
            .login
            .bind(this)
    }
    register() {
        this
            .props
            .history
            .push('/register')
    }
    async login() {
        let data = await getUser(this.state)
        console.log(data)
    }
    handleChange(key, val) {
        this.setState({ [key]: val })
    }
    render() {
        return (
            <div>
                <Logo></Logo>
                <List>
                    <WhiteSpace/>
                    <InputItem value={this.state.user} onChange={v => this.handleChange('user', v)}>用户名</InputItem>
                    <WhiteSpace/>
                    <InputItem value={this.state.pwd} onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
                </List>
                <WhiteSpace/>
                <WingBlank>
                    <Button type="primary" onClick={this.login}>登陆</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login