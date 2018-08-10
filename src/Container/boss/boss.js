/*
 * @Author: renpengfei 
 * @Date: 2018-08-10 14:54:55 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-08-10 16:03:12
 */
import React from 'react'
import { connect } from 'react-redux'
import UserCard from '../../Component/usercard/usercard'
import { getUserList } from '../../redux/chat.rudux'
@connect(state => state.chatuser,{ getUserList })
class Boss extends React.Component {
    componentDidMount() {
        this.props.getUserList('1')
    }
    render() {
        console.log(999999,this.props)
        return <UserCard userList={this.props.userList}></UserCard>
    }
}
export default Boss
