import { useState, useEffect, Children, cloneElement } from 'react'

import '../styles/styles.css';

import PropTypes from 'prop-types'

const ClickCopy = ({ index, isVisible, children }) => {

    const [animation, setAnimation] = useState("fade-invisible")

    const copyContent = () => {
        console.log(children.innerText)
    }

    return (
        <>
            { Children.map(children, child => cloneElement(child, { classes: animation })) }
        </>
        
    )
}

ClickCopy.propTypes = {
    index: PropTypes.number.isRequired,
    isVisible: PropTypes.bool.isRequired,
}

export default ClickCopy