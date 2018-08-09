/*
 * @Author: renpengfei 
 * @Date: 2018-08-09 17:05:47 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-08-09 18:21:36
 */
import React from 'react'
import PropTypes from 'prop-types'
class NavLinkBar extends React.Component {
    static proTypes = {
        data: PropTypes.array.isRequired
    }
    constructor(props) {
        super(props)
    }
    render() {
        const navList = this.props.data
        console.log(navList)
        return (
            <div>底部</div>
        )
    }

}
export default NavLinkBar