import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default ( events = {}, action ) => {
    switch(action.type){
        case READ_EVENTS:
        // [
            // {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
            // {id: 3, title: "Let's have an event 3!", body: "This is the body for event 3."}
        // ]
        // {
//          0: {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
//          1: {id: 3, title: "Let's have an event 3!", body: "This is the body for event 3."}        
//          }
// 
            // console.log(action.response.data)
            // console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
        default:
            return events
        
    }
}