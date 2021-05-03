import '../componentscss/Slideshow.css';
import PropTypes from 'prop-types'

const Slide = ({colour, content}) => {

    const style = {
        backgroundColor: colour
    }

    return (
        <div
            className="slide"
            style={style}
        >{content}</div>
    )
}

Slide.propTypes = {
    colour: PropTypes.string,
    content: PropTypes.element
}

export default Slide