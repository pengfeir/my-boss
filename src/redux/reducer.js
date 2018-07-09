/*
 * @Author: renpengfei 
 * @Date: 2018-07-03 15:05:34 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-09 17:43:27
 */
import { combineReducers } from 'redux'
import { counter } from './login'
import { user } from './user.redux'
export default combineReducers({ counter,user })