import { useSelector, useDispatch } from 'react-redux'
import actions from '../actions'
import SlideshowRow from '../components/SlideshowRow'
import '../styles/Slideshow.css';
import '../styles/flex.css';



function Slideshow({matrix}) {

  const index = useSelector(state => state.slideshow.index)

  return (
    <div className="slideshow">
        <div
            className="visible-slide"
            style={{ transform: `translate(${-index[0] * 100}%, ${-index[1] * 100}%)` }}
        >
            {matrix.map((colors, i) => (
                <SlideshowRow key={i} rowNumber={i} numberOfRows={matrix.length} colors={colors}/>
            ))}
        </div>
    </div>
  );
}

export default Slideshow

