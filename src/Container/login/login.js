/*
 * @Author: renpengfei
 * @Date: 2018-07-03 15:09:17
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-09 20:45:31
 */
import React from 'react'
import Logo from '../../Component/logo/logo'
import { Redirect } from 'react-router-dom'
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile'
import { connect } from 'react-redux'
import { logining } from '../../redux/login.redux'
import { imoocForm } from '../../Component/imooc-form/immooc-form'
@connect(state => state.user,{ logining })
@imoocForm
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.register = this.register.bind(this)
    }
    handleLogin() {
        this.props.logining(this.props.state)
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
                        value={this.props.state.user}
                        onChange={v => this.props.handleChange('user', v)}>用户名</InputItem>
                    <WhiteSpace/>
                    <InputItem
                        value={this.props.state.pwd}
                        type="password"
                        onChange={v => this.props.handleChange('pwd', v)}>密码</InputItem>
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