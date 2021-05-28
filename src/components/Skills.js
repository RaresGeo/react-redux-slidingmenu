import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { compareArray } from '../utility'

import '../styles/styles.css';
import '../styles/flex.css';
import styles from '../styles/skills.module.css';

import Skill from './subcomponents/Skill'
import Fade from './Fade'
import PropTypes from 'prop-types'


const Skills = ({position}) => {

    const skills = useSelector(state => state.skills.skills)
    const index = useSelector(state => state.slideshow.index)


    let skillKeys = Object.keys(skills)
    skillKeys.pop()

    const heightStyle = {
        maxHeight: `${100 / (skillKeys.length)}%`
    }

    const parseKeyToString = (str) => {

        while (true) {
            let capital = str.search(/(?<!\s)[A-Z]/g)
            if (capital < 1) break
            str = str.substring(0, capital) + ' ' + str.substring(capital)
        }
        str = str[0].toUpperCase() + str.slice(1);
        return str
    }


    return (
        <div className="container flex space-around items-center">
            <div className={`${styles.skills} flex-col center bg-black fade-parent-skills`}>
                    {
                        skills.fetched ? (
                            skillKeys.map( (skill, i) => {
                                return (
                                    <Fragment key={i}>
                                        {i > 0 && <hr />}
                                        <Fade index={i} isVisible={compareArray(position, index)}>
                                            <Skill skillHeader={parseKeyToString(skill)} skills={skills[skill]} style={heightStyle} index={i}/>
                                        </Fade>
                                    </Fragment>
                                )
                            })
                        ) : (
                            <h1 className="loading">Loading ...</h1>
                        )
                    }
            </div>
        </div>
    )
}

Skills.propTypes = {
    position: PropTypes.array,
}

export default Skills
