/*
 * @Author: renpengfei 
 * @Date: 2018-07-04 10:32:53 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-09 16:28:28
 */
import axios from './config'

/**
 *
 *
 * @param {*} data
 * @returns
 */
export const getUser = (data) => {
    return axios({
        url: '/getuserinfo',
        params: data,
        methods: 'post'
    })
}