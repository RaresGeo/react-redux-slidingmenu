import { combineReducers } from 'redux'
import slideshowReducer from './slideshowReducer'
import githubreducer from './githubReducer'

export default combineReducers({
    slideshow: slideshowReducer,
    githubfetch: githubreducer,
})