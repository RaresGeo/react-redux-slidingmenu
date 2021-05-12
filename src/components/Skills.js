import { useSelector } from 'react-redux'
import { Fragment } from 'react'

import '../styles/flex.css';
import '../styles/Github.css';
import '../styles/styles.css';
import '../styles/skills.css';
import React from 'react';

const Skills = () => {

    const skills = useSelector(state => state.skills.skills)

    let skillKeys = Object.keys(skills)
    skillKeys.pop()

    const style = {
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
            <div className="skills flex-col center">
                    {
                        skills.fetched ? (
                            skillKeys.map( (skill, i) => {
                                return (
                                    <Fragment key={i}>
                                        {i > 0 && <hr />}
                                        <div
                                        className="skills-row flex flex-start items-center"
                                        style={style}
                                        >
                                            <div className="skills-header"><h1>{parseKeyToString(skill)}</h1></div>
                                            <div className="skill-list flex-col center flex-wrap">
                                                {
                                                skills[skill].map((element, i) => (
                                                    <p key={i}>{element}</p>
                                                ))
                                                }
                                            </div>
                                        </div>
                                    </ Fragment>
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

export default Skills
