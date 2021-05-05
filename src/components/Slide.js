import { useSelector, useDispatch } from 'react-redux'
import actions from '../actions'
import '../styles/Slideshow.css';
import PropTypes from 'prop-types'

const Slide = ({position, slideSize, color}) => {

    const dispatch = useDispatch()

    const arrows = []

    if(position[1] > 0) {
        arrows.push({
            class: "top",
            index: [position[0], position[1] - 1]
        })
        if(position[0] > 0) {
            arrows.push({
                class: "top-left",
                index: [position[0] - 1, position[1] - 1]
            })
        }
        if(position[0] < slideSize[0] - 1) {
            arrows.push({
                class: "top-right",
                index: [position[0] + 1, position[1] - 1]
            })
        }
    }

    if(position[1] < slideSize[1] - 1) {
        arrows.push({
            class: "bot",
            index: [position[0], position[1] + 1]
        })
        if(position[0] > 0) {
            arrows.push({
                class: "bot-left",
                index: [position[0] - 1, position[1] + 1]
            })
        }
        if(position[0] < slideSize[0] - 1) {
            arrows.push({
                class: "bot-right",
                index: [position[0] + 1, position[1] + 1]
            })
        }
    }

    if(position[0] > 0) {
        arrows.push({
            class: "mid-left",
            index: [position[0] - 1, position[1]]
        })
    }
    if(position[0] < slideSize[0] - 1) {
        arrows.push({
            class: "mid-right",
            index: [position[0] + 1, position[1]]
        })
    }

    const style = {
        backgroundColor: `rgb${color}`
    }

    return (
        <div
            className="slide"
            style={style}
        >
            {arrows.map((arrow, i) => (
                <button key={i} className={`btn ${arrow.class}`} onClick={() => {dispatch(actions.slideshowActions.goTo(arrow.index))}}></button>
            ))}
            <h1>{color}</h1>
        </div>
    )
}

Slide.propTypes = {
    position: PropTypes.array,
    slideSize: PropTypes.array,
    color: PropTypes.string,
}

export default Slide
