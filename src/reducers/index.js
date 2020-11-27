import { combineReducers } from 'redux' //reducerを結合させるやつ
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })
//export default combineReducers({ foo, bar, baz }) //複数あったらこんな感じ

