/*
 * @Author: renpengfei
 * @Date: 2018-07-02 16:51:22
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-02 18:59:01
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Redirect, Route ,Switch } from 'react-router-dom'
import { counter } from './index.redux'
import Auth from './Auth'
import Dashboard from './Dashboard'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(counter, compose(applyMiddleware(thunk), window.devToolsExtension
    ? window.devToolsExtension()
    : f => f()))

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
        <Switch>
        <Route path='/login' component={Auth}></Route>
            <Route path='/dashboard' component={Dashboard}></Route>
            <Redirect to='dashboard'></Redirect>
        </Switch>
            
        </BrowserRouter>
    </Provider>
), document.getElementById('root'))

registerServiceWorker()
