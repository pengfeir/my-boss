/*
 * @Author: renpengfei
 * @Date: 2018-08-09 14:28:02
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-15 10:43:25
 */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import Boss from '../boss/boss'
import Genius from '../genius/genius'
import User from '../user/user'
import Msg from '../msg/msg'
import { getMsgList, recvMsg } from '../../redux/chat.redux'

@connect(state => state, { getMsgList, recvMsg })

class Dashboard extends React.Component {
    componentWillMount() {
        if (!this.props.chat.chatmsg.length) {
            this
                .props
                .getMsgList()
            this
                .props
                .recvMsg()
        }

    }
    render() {
        const user = this.props.user
        const { pathname } = this.props.location
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: Number(user.type) === 1
            }, {
                path: '/genius',
                text: 'boss',
                icon: 'job',
                title: 'BOSS列表',
                component: Genius,
                hide: Number(user.type) === 0
            }, {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg
            }, {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User
            }
        ]
        let a = navList.find(v => v.path === pathname)
            ? navList
                .find(v => v.path === pathname)
                .title
            : null
        return (
            <div>
                <NavBar mode="dark">
                    {a}</NavBar>
                <Switch>
                    {navList.map(v => (
                        <Route key={v.path} path={v.path} component={v.component}></Route>
                    ))}
                </Switch>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}
export default Dashboard