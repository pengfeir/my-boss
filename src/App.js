import React, {Component} from 'react'
import './App.css'
import {Button} from 'antd-mobile'
import {connect} from 'react-redux'
import
{
  addGun,
  removeGun,
  addGunAsync
}
from './index.redux.js'

@connect(
// state什么属性放在props里面
state => ({num: state}),
// 什么方法放在state里面会自动dispatch
{addGun, removeGun, addGunAsync})

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <Button onClick={this.props.addGun}>申请武器</Button>
          <Button onClick={this.props.removeGun}>上交武器</Button>
          <Button onClick={this.props.addGunAsync}>延迟上交武器</Button>
          现在有机枪{this.props.num}把
        </h1>
      </div>
    )
  }
}

export default App