/*
 * @Author: renpengfei
 * @Date: 2018-08-07 10:28:51
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-08-09 18:19:13
 */
import React from 'react'
import { Grid ,List } from 'antd-mobile'
class AvatarSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const avatarList = 'boy1,boy2,boy3,boy4,boy5,boy6,boy7,boy8,girl1,girl2,girl3,girl4,girl5,girl6,girl7'
            .split(',')
            .map(v => ({
                icon: require(`../img/${v}.png`),
                text: v
            }))
        const gridHeader = this.state.icon ? (<div>
            <span>已选择头像</span>
            <img src={this.state.icon} style={{ width: 20 }}/>
            </div>) : '请选择头像'
        return (
            <div>
                <List renderHeader={() => gridHeader}>
                <Grid data={avatarList} columnNum={5} onClick={elm => {
                    this.setState(elm)
                    this.props.selectAvatar(elm.text)
                }}></Grid>
                </List>
                
            </div>
        )
    }
}
export default AvatarSelector