import { combineReducers } from 'redux'
import slideshowReducer from './slideshowReducer'
import githubreducer from './githubReducer'
import skillsreducer from './skillsReducer'

export default combineReducers({
    slideshow: slideshowReducer,
    githubfetch: githubreducer,
    skills: skillsreducer
})