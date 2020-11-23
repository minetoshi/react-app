import { combineReducers } from 'redux' //reducerを結合させるやつ
import events from './events'

export default combineReducers({ events })
//export default combineReducers({ foo, bar, baz }) //複数あったらこんな感じ

