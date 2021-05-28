import '../../styles/styles.css';
import '../../styles/flex.css';
import styles from '../../styles/skills.module.css';

import PropTypes from 'prop-types'

const Skill = ({ skillHeader, skills, style, classes }) => {

    return (
        <div
        className={`${styles.skillsRow} flex flex-start items-center ${classes}`}
        style={style}
        >
            <div className={`${styles.skillsHeader}`}><h1>{skillHeader}</h1></div>
            <div className={`${styles.skillList} flex-col center flex-wrap`}>
                {
                skills.map((element, i) => (
                    <p key={i}>{element}</p>
                ))
                }
            </div>
        </div>
    )
}

Skill.propTypes = {
    skillHeader: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    style: PropTypes.object.isRequired,
    classes: PropTypes.string,
}

export default Skill
