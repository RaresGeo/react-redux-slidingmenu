import '../styles/Slideshow.css';
import Slide from './Slide'
import PropTypes from 'prop-types'


const SlideshowRow = ({rowNumber, numberOfRows, colors}) => {
    return (
        <div
            className="slideshow-row"
        >
          {colors.map((backgroundColor, i) => (
            <Slide key={i} position={[i, rowNumber]} slideSize={[colors.length, numberOfRows]} color={backgroundColor}/>
          ))}
        </div>
    )
}

Slide.propTypes = {
    colour: PropTypes.array,
    rowNumber: PropTypes.number,
    numberOfRows: PropTypes.number,
}

export default SlideshowRow