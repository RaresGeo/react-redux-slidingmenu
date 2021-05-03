import { combineReducers } from 'redux'
// import all reducers here
import countReducer from './countReducer'
import slideshowReducer from './slideshowReducer'

export default combineReducers({
    // all reducers here
    counter: countReducer,
    slideshow: slideshowReducer,
})