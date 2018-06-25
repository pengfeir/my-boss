import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import
{
    counter,
    addGun,
    removeGun,
    addGunAsync
}
from './index.redux.js'
const store = createStore(counter, compose(applyMiddleware(thunk)))
// ReactDOM.render(     <App/>, document.getElementById('root'))
function render() {
    ReactDOM.render(
        <App
        store={store}
        addGun={addGun}
        removeGun={removeGun}
        addGunAsync={addGunAsync}/>, document.getElementById('root'))
}
render()
store.subscribe(render)
registerServiceWorker()
