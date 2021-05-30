import { useSelector } from 'react-redux'
import { compareArray } from '../utility'

import '../styles/styles.css';
import '../styles/flex.css';
import styles from '../styles/Contact.module.css';

import Fade from './Fade'
import PropTypes from 'prop-types'


const Contact = ({ position }) => {

    const index = useSelector(state => state.slideshow.index)

    const LinkedIn = <a className="link" href="https://www.linkedin.com/in/rares-georgescu-7581071ab/"><span className="fab fa-linkedin-in"></span> Linkedin</a>
    const GitHub = <a className="link" href="https://github.com/RaresGeo"><span className="fab fa-github"></span> GitHub</a>
    const phone = <span><span className="fas fa-phone-alt"></span>0735 183 467</span>
    const email = <span><span className="fas fa-at"></span> raresgeo9@gmail.com</span>

    const contactLinks = [LinkedIn, GitHub, phone, email]

    return (
        <Fade index={0} isVisible={compareArray(position, index)}>
            <div className="container flex space-around items-center">
                <div className={`${styles.contact} bg-black flex flex-col space-around items-center`}>
                    <h1>- CONTACT -</h1>

                <div className={`${styles.links} flex space-evenly items-center`}>
                    {
                    contactLinks.map((element, i) => {
                        return (
                            <Fade index={i} isVisible={compareArray(position, index)}>
                                {element}
                            </Fade>
                        )
                    })
                    }
                </div>

                </div>
            </div>
        </Fade>
    )
}

Contact.propTypes = {
    position: PropTypes.array,
}

export default Contact
