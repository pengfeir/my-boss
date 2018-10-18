/*
 * @Author: renpengfei
 * @Date: 2018-07-03 15:09:17
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-10-18 21:10:13
 */
import React from 'react'
import Logo from '../../Component/logo/logo'
import { List, InputItem, WhiteSpace, Button, Radio } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/login.redux'
import { imoocForm } from '../../Component/imooc-form/immooc-form'
@connect(state => state.user, { register })
@imoocForm
class Register extends React.Component {
    render() {
        const RadioItem = Radio.RadioItem
        const data = [
            {
                value: 0,
                label: 'boss'
            }, {
                value: 1,
                label: '牛人'
            }
        ]
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo></Logo>
                <List>
                    <WhiteSpace/>
                    <InputItem value={this.props.state.user} onChange={v => this.props.handleChange('user', v)}>用户名</InputItem>
                    <WhiteSpace/>
                    <InputItem
                        value={this.props.state.pwd}
                        type="password"
                        onChange={v => this.props.handleChange('pwd', v)}>密码</InputItem>
                    <WhiteSpace/>
                    <InputItem
                        value={this.props.state.repeadpwd}
                        type="password"
                        onChange={v => this.props.handleChange('repeadpwd', v)}>确认密码</InputItem>
                    <WhiteSpace/> {data.map(i => (
                        <RadioItem
                            key={i.value}
                            checked={this.props.state.type === i.value}
                            onChange={v => this.props.handleChange('type', i.value)}>
                            {i.label}
                        </RadioItem>
                    ))}
                    <Button
                        type="primary"
                        onClick={v => this
                        .props
                        .register(this.props.state)}>注册</Button>
                </List>
            </div>
        )
    }
}

export default Register