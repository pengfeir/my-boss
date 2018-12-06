/*
 * @Author: renpengfei
 * @Date: 2018-07-03 15:05:34
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-05 21:07:15
 */
import { combineReducers } from 'redux'
import { user } from './login.redux'
import { chatuser } from './chatuser.redux'
import { chat } from './chat.redux'
export default combineReducers({ user, chatuser, chat })