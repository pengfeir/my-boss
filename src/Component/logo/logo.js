/*
 * @Author: renpengfei
 * @Date: 2018-07-03 15:30:04
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-03 15:53:08
 */
import React from 'react'
import logoImg from './logo.jpg'
import './logo.css'

class Logo extends React.Component {
    render() {
        return (
            <div>
                <img className='logo' src={logoImg} alt=""/>
            </div>
        )
    }
}

export default Logo