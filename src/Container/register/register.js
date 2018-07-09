/*
 * @Author: renpengfei
 * @Date: 2018-07-03 15:09:17
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-09 18:57:56
 */
import React from 'react'
import Logo from '../../Component/logo/logo'
import { List, InputItem, WhiteSpace, Button, Radio } from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'

@connect(state => state.user, { register })
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: '',
            repeadpwd: '',
            type: 0
        }
    }
    handleChange = (key, val) => {
        this.setState({ [key]: val },() => {
            this
            .props
            .register(this.state)
        })
        
    }
    onChange = (value) => {
        this.setState({ type: value })
    };
    render() {
        const RadioItem = Radio.RadioItem
        const data = [
            {
                value: 0,
                label: 'doctor'
            }, {
                value: 1,
                label: 'bachelor'
            }
        ]
        return (
            <div>
                <Logo></Logo>
                <List>
                    <WhiteSpace/>
                    <InputItem value={this.state.user} onChange={v => this.handleChange('user', v)}>用户名</InputItem>
                    <WhiteSpace/>
                    <InputItem value={this.state.pwd} onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
                    <WhiteSpace/>
                    <InputItem
                        value={this.state.repeadpwd}
                        onChange={v => this.handleChange('repeadpwd', v)}>确认密码</InputItem>
                    <WhiteSpace/> {data.map(i => (
                        <RadioItem
                            key={i.value}
                            checked={this.state.type === i.value}
                            onChange={() => this.onChange(i.value)}>
                            {i.label}
                        </RadioItem>
                    ))}
                    <Button type="primary" onClick={this.props.register}>注册</Button>
                </List>
            </div>
        )
    }
}

export default Register