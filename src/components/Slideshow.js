import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import SlideshowRow from '../components/SlideshowRow'
import '../styles/Slideshow.css';
import '../styles/flex.css';



function Slideshow({matrix}) {

  const index = useSelector(state => state.slideshow.index)

  return (
    <div className="slideshow">
        <div
            className="visible-slide"
            style={{ transform: `translate(${-index[1] * 100}%, ${-index[0] * 100}%)` }}
        >
            {matrix.map((components, i) => (
                <SlideshowRow key={i} rowNumber={i} matrix={matrix} components={components}/>
            ))}
        </div>
    </div>
  );
}

Slideshow.propTypes = {
  matrix: PropTypes.array.isRequired,
}

export default Slideshow

