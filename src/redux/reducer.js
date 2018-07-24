/*
 * @Author: renpengfei 
 * @Date: 2018-07-03 15:05:34 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-07-24 11:07:51
 */
import { combineReducers } from 'redux'
import { user } from './login.redux'
import { newUser } from './register.redux'
export default combineReducers({ user,newUser })