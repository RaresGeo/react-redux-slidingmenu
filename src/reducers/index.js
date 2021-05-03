import { combineReducers } from 'redux'
// import all reducers here
import countReducer from './countReducer'

export default combineReducers({
    // all reducers here
    counter: countReducer
})