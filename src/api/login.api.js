/*
 * @Author: renpengfei 
 * @Date: 2018-07-04 10:32:53 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-11 16:47:48
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
        method: 'post'
    })
}
export const create = (data) => {
    return axios({
        url: '/create',
        data: data,
        method: 'post'
    })
}