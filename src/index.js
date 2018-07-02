import React from 'react'
import ReactDOM from 'react-dom'
// createStore接收三个参数
// reducer为function。当dispatch一个action时，此函数接收action来更新state
// preloadState初始化State
// enhancer 为function。用来增强store, Redux 定义有applyMiddleware来增强store

// applyMiddlewares将所有中间件组成一个数组，依次执行

// compose从右到左来组合多个函数。
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {counter} from './index.redux.js'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(counter, compose(applyMiddleware(thunk), window.devToolsExtension
    ? window.devToolsExtension()
    : f => f()))
ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'))
registerServiceWorker()
