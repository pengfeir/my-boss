/*
 * @Author: renpengfei
 * @Date: 2018-11-21 16:22:31
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-11-21 17:18:48
 */
import React from 'react'
import '../../index.css'
import { List, InputItem } from 'antd-mobile'
import io from 'socket.io-client'
const socket = io('ws://localhost:8888')
class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            msg: []
        }
    }
    handleSubmit() {
        console.log(this.state)
        socket.emit('sendmsg', { text: this.state.text })
    }
    componentDidMount() {
        socket
            .on('recvmsg', (data) => {
                this.setState({
                    msg: [
                        ...this.setState,
                        data.text
                    ]
                })
            })
    }
    render() {
        return (
            <div>
                {this.state.msg.map((v,index) => {
                    return (
                        <p key={index}>{v}</p>   
                    )
                })}
                <p></p>
                <div className="stick-footer">
                    <List>
                        <InputItem
                            placeholder='请输入'
                            value={this.state.text}
                            onChange={v => {
                            this.setState({ text: v })
                        }}
                            extra={< span onClick = {
                            () => this.handleSubmit()
                        } > 发送 < /span>}></InputItem>
                    </List>
                </div>
            </div>

        )

    }
}
export default Chat