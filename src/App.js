/*
 * @Author: renpengfei
 * @Date: 2018-07-02 18:47:49
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-03 10:50:03
 */
import React, { Component } from 'react'
import './App.css'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'
import
{
  addGun,
  removeGun,
  addGunAsync
}
from './index.redux'

@connect(
// state什么属性放在props里面
state => ({ num: state.counter }),
// 什么方法放在state里面会自动dispatch
{ addGun, removeGun, addGunAsync })

class App extends Component {
  render() {
console.log(this.props)
    return (
      <div>
        <h1>
          现在有机枪{this.props.num}把</h1>
        <Button onClick={this.props.addGun}>申请武器</Button>
        <Button onClick={this.props.removeGun}>上交武器</Button>
        <Button onClick={this.props.addGunAsync}>延迟上交武器</Button>
      </div>
    )
  }
}

export default App
