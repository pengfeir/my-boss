/*
 * @Author: renpengfei
 * @Date: 2018-07-04 10:03:47
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-24 14:51:07
 */
import axios from 'axios'
import { Toast } from 'antd-mobile'
const service = axios.create({
    timeout: 6000 //超时时间
})
// Add a request interceptor
service
    .interceptors
    .request
    .use(
    // Do something before request is sent
    config => {
        Toast.loading('Loading...', 2, () => {
            console.log('Load complete !!!')
        })
        console.log('config.url',config)
        return config
    },
    // Do something with request error
    error => Promise.reject(error))

// Add a response interceptor
service
    .interceptors
    .response
    .use(
    // Do something with response data
    response => {
        Toast.hide()
        if (response.data) {
            return Promise.resolve(response.data)
        } else {
            return Promise.reject(response)
        }
    },
    // Do something with response error
    error => {
        return Promise.reject(error)
    })

export default service