import React, {Component} from 'react'
import './App.css'
import {Button} from 'antd-mobile'
class App extends Component {
  render() {
    const store = this.props.store
    const removeGun = this.props.removeGun
    const addGun = this.props.addGun
    const addGunAsync = this.props.addGunAsync
    const num = store.getState()
    return (
      <div className="App">
        <h1>
          <Button onClick={() => store.dispatch(addGun())}>申请武器</Button>
          <Button onClick={() => store.dispatch(removeGun())}>上交武器</Button>
          <Button onClick={() => store.dispatch(addGunAsync())}>延迟上交武器</Button>
          现在有机枪{num}把
        </h1>
      </div>
    )
  }
}

export default App
