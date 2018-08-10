/*
 * @Author: renpengfei 
 * @Date: 2018-08-10 14:54:49 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-08-10 16:44:46
 */
import React from 'react'
import { connect } from 'react-redux'
import UserCard from '../../Component/usercard/usercard'
import { getUserList } from '../../redux/chat.rudux'
@connect(state => state.chatuser,{ getUserList })
class Genius extends React.Component {
    componentDidMount() {
        this.props.getUserList('0')
    }
    render() {
        return <UserCard userList={this.props.userList}></UserCard>
    }
}
export default Genius
