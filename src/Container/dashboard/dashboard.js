/*
 * @Author: renpengfei
 * @Date: 2018-08-09 14:28:02
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-10-18 19:44:46
 */
import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import Boss from '../boss/boss'
import Genius from '../genius/genius'
import User from '../user/user'
function Msg() {
    return <div>Msg</div>
}
@connect(state => state, null)
class Dashboard extends React.Component {
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
                hide: Number(user.type) === 1,
            }, {
                path: '/genius',
                text: 'boss',
                icon: 'job',
                title: 'BOSS列表',
                component: Genius,
                hide: Number(user.type) === 0,
            }, {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg,
            }, {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: Msg,
            }
        ]
        return (
            <div>
                <NavBar mode="dark">
                {navList.find(v => v.path === pathname).title}</NavBar>
                <Route path='/boss' component={Boss}></Route>
                <Route path='/genius' component={Genius}></Route>
                <Route path='/me' component={User}></Route>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}
export default Dashboard