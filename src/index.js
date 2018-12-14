/*
 * @Author: renpengfei
 * @Date: 2018-07-02 16:51:22
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-13 17:07:05
 */
import React from 'react'
import ReactDOM from 'react-dom'
import vConsole from 'vconsole'
// 创建一个 Redux store 来以存放应用中所有的 state。 应用中应有且仅有一个 store。
// http://www.redux.org.cn/docs/api/compose.html
import { createStore, applyMiddleware, compose } from 'redux'
// redux-thunk 是一个比较流行的 redux 异步 action 中间件
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reducers from './redux/reducer'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import Login from './Container/login/login'
import Register from './Container/register/register'
import AuthRoute from './Component/authroute/authroute'
import BossInfo from './Container/bossinfo/bossinfo'
import GeniusInfo from './Container/geniusinfo/geniusinfo'
import Dashboard from './Container/dashboard/dashboard'
import Chat from '../src/Container/chat/chat'

new vConsole()
console.log(vConsole)
const store = createStore(reducers, compose(applyMiddleware(thunk), window.devToolsExtension
    ? window.devToolsExtension()
    : f => f))

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path='/bossinfo' component={BossInfo}></Route>
                    <Route path='/geniusinfo' component={GeniusInfo}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/boss' component={Dashboard}></Route>
                    <Route path='/genius' component={Dashboard}></Route>
                    <Route path='/chat/:id' component={Chat}></Route>
                    <Route component={Dashboard}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'))

registerServiceWorker()