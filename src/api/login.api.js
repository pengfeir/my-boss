/*
 * @Author: renpengfei 
 * @Date: 2018-07-04 10:32:53 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-15 21:05:53
 */
import axios from './config'

/**
 *
 *
 * @param {*} data
 * @returns
 */
export const getInfo = (data) => {
    return axios({
        url: '/getInfo',
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
export const del = (data) => {
    return axios({
        url: '/del',
        data: data,
        method: 'post'
    })
}
export const login = (data) => {
    return axios({
        url: '/login',
        data: data,
        method: 'post'
    })
}
export const updateInfo = (data) => {
    return axios({
        url: '/update',
        data: data,
        method: 'post'
    })
}
export const list = (data) => {
    return axios({
        url: '/list',
        data: data,
        method: 'post'
    })
}
export const msgList = (data) => {
    return axios({
        url: '/getMsgList',
        data: data,
        method: 'post'
    })
}
export const readmsgList = (data) => {
    return axios({
        url: '/readMsg',
        data: data,
        method: 'post'
    })
}