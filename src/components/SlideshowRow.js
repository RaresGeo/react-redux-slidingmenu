import '../styles/Slideshow.css';
import Slide from './Slide'
import PropTypes from 'prop-types'


const SlideshowRow = ({rowNumber, matrix, components}) => {

  

    return (
        <div
            className="slideshow-row"
        >
          {components.map((component, i) => {

            if(typeof component !== 'object') {
              return <Slide key={i}/>
            }

            let arrows = []

            const addArrow = (grid, _class, coordinates) => {
                let x = coordinates[0]
                let y = coordinates[1]
                console.log(grid)
                if(typeof grid[x] === 'undefined') return
                if(typeof grid[x][y] === 'object') {
                    arrows.push({
                        class: _class,
                        index: coordinates
                    })
                }
            }

            addArrow(matrix, 'top', [rowNumber - 1, i])
            addArrow(matrix, 'top-left', [rowNumber - 1, i - 1])
            addArrow(matrix, 'top-right', [rowNumber - 1, i + 1])
            addArrow(matrix, 'mid-left', [rowNumber, i - 1])
            addArrow(matrix, 'mid-right', [rowNumber, i + 1])
            addArrow(matrix, 'bot', [rowNumber + 1, i])
            addArrow(matrix, 'bot-left', [rowNumber + 1, i - 1])
            addArrow(matrix, 'bot-right', [rowNumber + 1, i + 1])

            return <Slide component={typeof component === 'object' && component} key={i} arrows={arrows}/>
          })}
        </div>
    )
}

SlideshowRow.propTypes = {
    rowNumber: PropTypes.number,
    matrix: PropTypes.array.isRequired,
    components: PropTypes.array,
}

export default SlideshowRow