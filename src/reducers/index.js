import { combineReducers } from 'redux'
import slideshowReducer from './slideshowReducer'

export default combineReducers({
    slideshow: slideshowReducer,
})