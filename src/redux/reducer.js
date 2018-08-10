/*
 * @Author: renpengfei 
 * @Date: 2018-07-03 15:05:34 
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-08-10 15:13:07
 */
import { combineReducers } from 'redux'
import { user } from './login.redux'
import { chatuser } from './chat.rudux'
export default combineReducers({ user ,chatuser })