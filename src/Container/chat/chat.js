/*
 * @Author: renpengfei
 * @Date: 2018-11-21 16:22:31
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-06 11:17:21
 */
import React from 'react'
import '../../index.css'
import { List, InputItem } from 'antd-mobile'
import { getMsgList,sendMsg ,recvMsg } from '../../redux/chat.redux'
import { connect } from 'react-redux'
@connect(state => state,
{ getMsgList ,sendMsg,recvMsg })
class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            msg: []
        }
    }
    handleSubmit() {
        const from = this.props.user._id
        console.log('props',this.props)
        const to = this.props.match.params.id
        const msg = this.state.text
        this.props.sendMsg(from,to,msg)
        this.setState({ text: '' })
    }
    componentDidMount() {
        this.props.getMsgList()
        this.props.recvMsg()
        // socket
        //     .on('recvmsg', (data) => {
        //         this.setState({
        //             msg: [
        //                 ...this.setState,
        //                 data.text
        //             ]
        //         })
        //     })
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
                            extra={< span onClick = {() => this.handleSubmit()} > 发送 </span>}
                        >
                        </InputItem>
                    </List>
                </div>
            </div>

        )

    }
}
export default Chat