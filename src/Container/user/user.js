/*
 * @Author: renpengfei
 * @Date: 2018-08-13 20:05:47
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-08-13 21:58:28
 */

import React from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Modal } from 'antd-mobile'
import cookies from 'browser-cookies'
import { Redirect } from 'react-router-dom'
import { logoutSubmit } from '../../redux/login.redux'
@connect(state => state.user, { logoutSubmit })

class User extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this
            .logout
            .bind(this)
    }
    logout() {
        const alert = Modal.alert
        alert('注销', '确认退出登陆吗？', [
            {
                text: '取消',
                onPress: () => console.log('cancel')
            }, {
                text: '确认',
                onPress: () => {
                    cookies.erase('userid')
                    this
                        .props
                        .logoutSubmit()
                }
            }
        ])

    }
    render() {
        const Item = List.Item
        const Brief = Item.Brief
        return this.props.user
            ? (
                <div className='userinfo'>
                    <Result
                        img={< img src = {
                        require(`../../Component/img/${this.props.avatar}.png`)
                    }
                    alt = '' />}
                        title={this.props.user}
                        message={Number(this.props.type) === 0
                        ? this.props.company
                        : null}/>
                    <List renderHeader={() => '简介'} className="my-list">
                        <Item multipleLine>
                            {this.props.title}
                            {this
                                .props
                                .desc
                                .split('\n')
                                .map(v => (
                                    <Brief key={v}>{v}</Brief>
                                ))}
                            {this.props.money
                                ? <Brief>薪资：{this.props.money}</Brief>
                                : null}
                        </Item>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <List>
                        <Item onClick={this.logout}>
                            退出登录
                        </Item>
                    </List>
                </div>
            )
            : (this.props.redirectTo
                ? <Redirect to={this.props.redirectTo}/>
                : null)

    }
}
export default User