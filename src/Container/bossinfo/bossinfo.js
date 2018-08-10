/*
 * @Author: renpengfei
 * @Date: 2018-08-07 10:16:38
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-08-10 14:27:54
 */
import React from 'react'
import AvatarSelector from '../../Component/avatar-selector/avatar-selector'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { update } from '../../redux/login.redux'

@connect(state => state.user, { update })

class BosseInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar: '',
            title: '',
            company: '',
            money: '',
            desc: '',
        }
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    onChange(key, val) {
        this.setState({ [key]: val })
    }
    handleUpdate() {
        console.log(this.state)
        this.props.update(this.state)
    }
    render() {
        const { pathname } = this.props.location
        const redirect = this.props.redirectTo
        return (
            <div>
                {redirect && redirect !== pathname ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <NavBar mode='dark'>
                    NavBar
                </NavBar>
                <AvatarSelector selectAvatar={(imgname) => {
                    this.onChange('avatar', imgname)
                }}></AvatarSelector>
                <InputItem onChange={v => this.onChange('title', v)}>招聘职位</InputItem>
                <InputItem onChange={v => this.onChange('company', v)}>公司名称</InputItem>
                <InputItem onChange={v => this.onChange('money', v)}>职位薪资</InputItem>
                <TextareaItem
                    title="职位要求"
                    rows={3}
                    onChange={v => this.onChange('desc', v)}
                    autoHeight/>
                <Button type='primary' onClick={this.handleUpdate}>保存</Button>
            </div>
        )
    }
}
export default BosseInfo