import { useSelector } from 'react-redux'
import { compareArray } from '../utility'

import styles from '../styles/Github.module.css';
import '../styles/flex.css';
import '../styles/styles.css';

import Fade from './Fade'
import Repo from './subcomponents/Repo'
import PropTypes from 'prop-types'

const Github = ({ position }) => {

    const user = useSelector(state => state.githubfetch.user)
    const repos = useSelector(state => state.githubfetch.repos)
    const index = useSelector(state => state.slideshow.index)


    return (
        <div className="container flex space-around items-center">
            <div className={`${styles.github} flex space-around`}>
                <div className={`${styles.profile} flex-col space-evenly fade-parent-github`}>
                    {
                        user.fetched ? (
                            <>
                                <img src={user.avatar_url} alt="avatar" className={`${styles.avatar}`}/>
                                <a href={user.html_url} className={`${styles.profileName} link`}><h1>{user.login}</h1></a>
                                <p className={`${styles.bio}`}>{user.bio}</p>
                            </>
                        ) : <h1 className="loading">Loading ...</h1>
                    }
                </div>

                <div className={`${styles.repos} flex space-between flex-wrap items-center fade-parent-github`}>
                    {
                        repos.fetched ? (
                            repos.list.map((repo, i) => (
                                <Fade key={i} index={i} isVisible={compareArray(position, index)}>
                                    <Repo name={repo.name} description={repo.description ? repo.description : "no description"} url={repo.html_url}/>
                                </Fade>
                            ))
                        ) : <h1 className="loading">Loading ...</h1>
                    }
                </div>
            </div>
        </div>
    )
}

Github.propTypes = {
    position: PropTypes.array,
}

export default Github
