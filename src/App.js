import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import {Button} from 'antd-mobile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button>default</Button>
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">hello word</h1>
        </header>
        <p className="App-intro"></p>
      </div>
    )
  }
}

export default App
