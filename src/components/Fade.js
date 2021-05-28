import { useState, useEffect, Children, cloneElement } from 'react'

import '../styles/styles.css';

import PropTypes from 'prop-types'

const Fade = ({ index, isVisible, children }) => {

    const [animation, setAnimation] = useState("fade-invisible")

    useEffect(() => { 
        if(isVisible) {
            setTimeout(() => {
                setAnimation("fade-in-and-up")
            }, index * 100)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible])

    return (
        <>
            {Children.map(children, child => cloneElement(child, { classes: animation }))}
        </>
    )
}

Fade.propTypes = {
    index: PropTypes.number.isRequired,
    isVisible: PropTypes.bool.isRequired,
}

export default Fade