/*
 * @Author: renpengfei
 * @Date: 2018-08-09 14:28:02
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-08-09 18:20:41
 */
import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'

function Boss() {
    return <div>boss</div>
}
function Genius() {
    return <div>Genius</div>
}
function Msg() {
    return <div>Msg</div>
}
@connect(state => state, null)
class Dashboard extends React.Component {
    render() {
        const user = this.props.user
        const pathname = this.props.location.pathname
        console.log('pathname',pathname)
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: user.type === '1'
            }, {
                path: '/genius',
                text: 'boss',
                icon: 'job',
                title: 'BOSS列表',
                component: Genius,
                hide: user.type === '0'
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
                component: Msg
            }
        ]
        return (
            <div>
                <NavBar mode="dark">{navList.find(v => v.path === pathname).title}</NavBar>
                <Route path='/boss' component={Boss}></Route>
                <Route path='/genius' component={Genius}></Route>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}
export default Dashboard