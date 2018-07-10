/*
 * @Author: renpengfei
 * @Date: 2018-07-02 16:51:22
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-10 17:35:00
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import reducers from './redux/reducer'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import Login from './Container/login/login'
import Register from './Container/register/register'
import AuthRoute from './Component/authroute/authroute'
const store = createStore(reducers, compose(applyMiddleware(thunk), window.devToolsExtension
    ? window.devToolsExtension()
    : f => f))

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'))

registerServiceWorker()