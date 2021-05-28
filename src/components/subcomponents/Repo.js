import styles from '../../styles/Github.module.css';
import '../../styles/styles.css';
import '../../styles/flex.css';

import PropTypes from 'prop-types'

const Repo = ({ name, description, url, classes }) => {


    return (
        <div className={`${styles.repo} ${classes} flex-col space-evenly`}>
            <a href={url} className={`${styles.repoLink} link`}><h1>{name}</h1></a>
            <p className={`${styles.repoDesc}`}>{description}</p>
        </div>
    )
}

Repo.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    classes: PropTypes.string,
}

export default Repo
