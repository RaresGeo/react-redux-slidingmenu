import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import actions from '../actions'

import '../styles/Slideshow.css';

const Slide = ({component, arrows}) => {

    const dispatch = useDispatch()
    
    return (
        <div
            className="slide"
        >
            { arrows && (
            arrows.map((arrow, i) => (
                <button key={i} className={`btn ${arrow.class}`} onClick={() => {dispatch(actions.slideshowActions.goTo(arrow.index))}}></button>
            )))
            }
            {component}
        </div>
    )
}

Slide.propTypes = {
    component: PropTypes.element,
    arrows: PropTypes.array
}

export default Slide
