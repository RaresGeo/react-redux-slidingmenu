import { useSelector, useDispatch } from 'react-redux'
import actions from '../actions'
import '../componentscss/Slideshow.css';

const Slideshow = () => {

    const colors = ["red", "yellow", "blue"];
    const delay = 2500;

    const index = useSelector(state => state.slideshow.index)
    const dispatch = useDispatch()


    return (
        <div className="slideshow">
        <div
          className="visibleSlide"
          style={{ transform: `translateX(${-index * 100}%)` }}
        >
          {colors.map((backgroundColor, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundColor }}
            ></div>
          ))}
        </div>

        <div className="slideshowMenu">
            {colors.map((backgroundColor, i) => (
                <div
                key={i}
                style={ index !== i ? {backgroundColor} : {} }
                className="slideshowDot"
                onClick={() => dispatch(actions.slideshowActions.goTo(i))}
                ></div>
            ))}
        </div>
      </div>
    )
}

export default Slideshow