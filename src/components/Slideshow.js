import { useSelector, useDispatch } from 'react-redux'
import actions from '../actions'
import Slide from './Slide'
import '../componentscss/Slideshow.css';
import '../componentscss/flex.css';

const Slideshow = () => {

    const colors = ["red", "yellow", "blue"];

    const index = useSelector(state => state.slideshow.index)
    const dispatch = useDispatch()

    return (
        <div className="slideshow">
        <div
          className="visibleSlide"
          style={{ transform: `translateX(${-index * 100}%)` }}
        >
          {colors.map((backgroundColor, i) => (
            <Slide key={i} colour={backgroundColor}/>
          ))}
        </div>

        <div className="slideshowMenu flex space-evenly">
            {colors.map((backgroundColor, i) => (
                <div
                key={i}
                style={ index !== i ? {backgroundColor} : {} }
                className={`slideshowDot${ i === index ? ' selected' : ''}`}
                onClick={() => dispatch(actions.slideshowActions.goTo(i))}
                ></div>
            ))}
        </div>
      </div>
    )
}

export default Slideshow