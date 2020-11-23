import { combineReducers } from 'redux' //reducerを結合させるやつ
import count from './count'

export default combineReducers({ count })
//export default combineReducers({ foo, bar, baz }) //複数あったらこんな感じ

