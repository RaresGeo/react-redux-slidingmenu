import '../styles/flex.css';
import '../styles/Github.css';
import PropTypes from 'prop-types'

const Repo = ({ name, description, url}) => {

    return (
        <div className="repo flex-col space-evenly">
            <a href={url} className="repo-link link"><h1>{name}</h1></a>
            <p className="repo-desc">{description}</p>
        </div>
    )
}

Repo.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
}

export default Repo
