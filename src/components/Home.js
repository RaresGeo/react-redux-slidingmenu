import { useSelector } from 'react-redux'
import { compareArray } from '../utility'

import '../styles/styles.css';
import '../styles/flex.css';
import styles from '../styles/Home.module.css';

import Fade from './Fade'
import PropTypes from 'prop-types'


const Home = ({ position }) => {

    const index = useSelector(state => state.slideshow.index)

    return (
        <Fade index={0} isVisible={compareArray(position, index)}>
            <div className="container flex space-around items-center">
                <div class={`${styles.home}`}>
                    <h1>- Georgescu Rareș -</h1>
                    <h2>Student and aspiring developer</h2>
                </div>
            </div>
        </Fade>
    )
}

Home.propTypes = {
    position: PropTypes.array,
}

export default Home
