/*
 * @Author: renpengfei
 * @Date: 2018-11-21 16:22:31
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-13 17:09:57
 */
import React from 'react'
import '../../index.css'
import { List, InputItem, NavBar, Icon, Grid } from 'antd-mobile'
import { sendMsg, getMsgList, recvMsg } from '../../redux/chat.redux'
import { connect } from 'react-redux'
import { getChatId } from '../../util/util'
@connect(state => state, { sendMsg, getMsgList, recvMsg })
class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            // msg: [],
            showEmoji: false
        }
    }
    handleSubmit() {
        const from = this.props.user._id
        const to = this.props.match.params.id
        const msg = this.state.text
        console.log('fasongchenggong')
        this
            .props
            .sendMsg(from, to, msg)
        this.setState({ text: '', showEmoji: false })
    }
    fixCarepusel() {
        setTimeout(v => {
            window.dispatchEvent(new Event('resize'))
        },0)
    }
    componentWillMount() {
        if (!this.props.chat.chatmsg.length) {
            this
                .props
                .getMsgList()
            this
                .props
                .recvMsg()
        }

    }
    render() {
        const emoji = ("🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 " +
                "😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 🙁 😖 😞 😟 😤 😢 😭 😦 " +
                "😧 😨 😩 🤯 😬 😰 😱 🥵 🥶 😳 🤪 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤡 🥳 🥴 🥺 " +
                "🤥 🤫 🤭 🧐 🤓")
            .split(' ')
            .filter(v => v)
            .map(v => ({ text: v }))
        const userid = this.props.match.params.id
        const Item = List.Item
        const users = this.props.chat.users
        if (!users[userid]) {
            return null
        }
        const chatid = getChatId(userid, this.props.user._id)
        const chatmsg = this
            .props
            .chat
            .chatmsg
            .filter(v => v.chatid === chatid)
        return (
            <div id='chat-page'>
                <NavBar
                    mode='dark'
                    icon={< Icon type = "left" />}
                    onLeftClick={() => this.props.history.goBack()}>
                    {users[userid].name}
                </NavBar>

                {chatmsg.map((v, index) => {
                    const avatar = require(`../../Component/img/${users[v.from].avatar}.png`)
                    return (v.from === userid
                        ? (
                            <List key={v._id}>
                                <Item thumb={avatar}>
                                    {v.content}
                                </Item>
                            </List>
                        )
                        : (
                            <List key={v._id}>
                                <Item
                                    className='chat-me'
                                    extra
                                    ={< img src = {
                                    avatar
                                } />}>
                                    {v.content}
                                </Item>
                            </List>
                        ))
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
                            extra={<div><span
                            style={{
                            marginRight: 15
                        }}
                            onClick=
                            {
                                () => {
this.setState({ showEmoji: !this.state.showEmoji })
                            this.fixCarepusel()
}
                            }>😃
                        </span><span onClick = {
                            () => this.handleSubmit()
                        } > 发送 </span> </div>}></InputItem>
                    </List>
                    {this.state.showEmoji
                        ? <Grid data={emoji} columnNum={9} carouselMaxRow={4} isCarousel={true}
                        onClick={el => {
this.setState({ text: this.state.text + el.text })
                        }}
                        />
                        : null}
                </div>
            </div>
        )
    }
}
export default Chat