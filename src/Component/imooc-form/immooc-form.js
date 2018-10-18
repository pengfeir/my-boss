/*
 * @Author: renpengfei
 * @Date: 2018-10-18 19:53:46
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-10-18 21:15:00
 */
import React from 'react'
export const imoocForm = (Comp) => (class WrapperComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 0
        }
        this.handleChange = this
            .handleChange
            .bind(this)
    }
    handleChange(key, val) {
        this.setState({ [key]: val })
    }
    render() {
        return (
            <div>
                <Comp handleChange={this.handleChange} state={this.state} {...this.props}></Comp>
            </div>
        )
    }
})