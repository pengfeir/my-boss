/*
 * @Author: renpengfei
 * @Date: 2018-07-02 18:15:25
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-02 18:33:53
 */
import React from 'react'
import { Link, Route } from 'react-router-dom'
import App from './App'
let Entring = () => <h2>二营</h2>
let Qibinglian = () => <h2>骑兵连</h2>
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
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
    }
}
export default Dashboard