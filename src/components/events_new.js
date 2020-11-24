import React , {Component} from 'react';
import { connect } from 'react-redux'
// import { postEvent } from '../actions'
import {Link} from 'react-router-dom'


class EventsNew extends Component{
  render(){
      return (
        <React.Fragment>
          <div>hi</div>
        </React.Fragment>

      )
  }
}

//const mapDispatchToProps = ({ postEvents })

//state action　をコンポネントに関連づける。
export default connect(null, null)(EventsNew)

