/*
 * @Author: renpengfei 
 * @Date: 2018-07-03 15:05:34 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-03 15:20:58
 */
import { combineReducers } from 'redux'
import { counter } from './login'
import { auth } from './register'
export default combineReducers({ counter,auth })