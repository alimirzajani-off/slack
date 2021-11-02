import { combineReducers } from 'redux'
import channelList from './channelList'
import directList from './directList'
import message from './message'
export default combineReducers({
  channelList: channelList,
  directList: directList,
  message: message,
})
