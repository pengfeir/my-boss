/*
 * @Author: renpengfei
 * @Date: 2018-07-02 18:15:25
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-03 14:56:30
 */
import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import App from './App'
import { logout } from './Auth.redux'
import { connect } from 'react-redux'
@connect(state => state.auth, { logout })

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = (
            <div>
                <h1>独立团</h1>
                {this.props.isAuth
                    ? <button onClick={this.props.logout}>注销</button>
                    : null}
                <ul>
                    <li>
                        <Link to='/dashboard/'>一营</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/entring'>二营</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/qibinglian'>骑兵连</Link>
                    </li>
                </ul>
                <Route path='/dashboard' exact component={App}></Route>
                <Route path='/dashboard/entring' component={Entring}></Route>
                <Route path='/dashboard/qibinglian' component={Qibinglian}></Route>
            </div>
        )
        return this.props.isAuth
            ? app
            : redirectToLogin
    }
}
let Entring = () => <h2>二营</h2>
let Qibinglian = () => <h2>骑兵连</h2>
export default Dashboard