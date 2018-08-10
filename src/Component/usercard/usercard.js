/*
 * @Author: renpengfei 
 * @Date: 2018-08-10 15:32:00 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-08-10 16:53:03
 */
import React from 'react'
import { Card , WingBlank, WhiteSpace } from 'antd-mobile'
import PropTypes from 'prop-types'
import './index.css'
class UserCard extends React.Component {
    static proTypes = {
        userList: PropTypes.array.isRequired
    }
    constructor(props) {
        super(props)
    }
    render() {
        return (<WingBlank >
            <WhiteSpace></WhiteSpace>
            {this.props.userList.map(v => (
                v.avatar ? (
                    <Card key={v._id}>
                    <Card.Header
                      title={v.user}
                      thumb={require(`../img/${v.avatar}.png`)}
                      extra={<span>{v.title}</span>}
                    />
                    <Card.Body>
                    {v.type === '0' ? <div>公司:{v.company}</div> : null}
                    {v.desc.split('\n').map(x => (
                        <div key={x}>{x}</div> 
                    ))}
                      {v.type === '0' ? <div>薪资:{v.money}</div> : null}
                    </Card.Body>
                  </Card> 
                ) : null
            ))}
        </WingBlank>) 
    }
}
export default UserCard