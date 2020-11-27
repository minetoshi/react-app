//typeは一か所で定義
//actionクリエイター

import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENTS = 'CREATE_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
    // const response = await axios.get('${ROOT_URL}/events${QUERYSTRING}')
    const response = await axios.get('https://udemy-utils.herokuapp.com/api/v1/events?token=token123')
    console.log(response)
    dispatch({ type: 'READ_EVENTS',response})
}

export const postEvent = values => async dispatch => {
    const response = await axios.post('https://udemy-utils.herokuapp.com/api/v1/events?token=token123',values)
    dispatch({ type: 'CREATE_EVENTS',response})
}
