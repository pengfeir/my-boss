/*
 * @Author: renpengfei
 * @Date: 2018-07-02 18:36:08
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-03 10:20:05
 */
// 合并所有reducer并且返回
import { combineReducers } from 'redux'
import { counter } from './index.redux'
import { auth } from './Auth.redux'
export default combineReducers({ counter, auth })