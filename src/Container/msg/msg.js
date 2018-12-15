/*
 * @Author: renpengfei
 * @Date: 2018-12-15 10:45:56
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-15 14:39:30
 */

import React from 'react'
import { connect } from 'react-redux'
import { List ,Badge } from 'antd-mobile'
@connect(state => state)
class Msg extends React.Component {
    getLast(arr) {
        return arr[arr.length - 1]
    }
    render() {
        const Item = List.Item
        const Brief = Item.Brief
        const msgGroup = this
            .props
            .chat
            .chatmsg
            .reduce((total, cur) => {
                total[cur.chatid] = total[cur.chatid] || []
                total[cur.chatid].push(cur)
                return total
            }, {})
        const userid = this.props.user._id
        const userInfo = this.props.chat.users
        const chatList = Object.values(msgGroup).sort((a,b) => {
            const a_last = this.getLast(a).create_time
            const b_last = this.getLast(b).create_time
            return b_last - a_last
        })

        return (
            <div>
                <list>
                    {chatList.map(v => {
                        const lastItem = this.getLast(v)
                        const targetId = v[0].from === userid
                            ? v[0].to
                            : v[0].from
                        if (!userInfo[targetId]) {
                            return null
                        }
                        const name = userInfo[targetId]
                            ? userInfo[targetId].name
                            : null
                        const avatar = userInfo[targetId]
                            ? userInfo[targetId].avatar
                            : null
                        const unreadNum = v.filter(v => !v.read && v.to === userid).length
                        return (
                            <Item key={lastItem._id}
                            extra={<Badge text={unreadNum}></Badge>} 
                            thumb={require(`../../Component/img/${avatar}.png`)}
                            onClick={() => {
                                this.props.history.push(`/chat/${targetId}`)
                            }}
                            >
                                {lastItem.content}
                                <Brief>{name}</Brief>
                            </Item>
                        )

                    })
}
                </list>
            </div>
        )
    }
}
export default Msg