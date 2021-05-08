import { useSelector } from 'react-redux'

import '../styles/flex.css';
import '../styles/Github.css';

import Repo from './Repo'
import PropTypes from 'prop-types'

const Github = () => {

    const user = useSelector(state => state.githubfetch.user)
    const repos = useSelector(state => state.githubfetch.repos)


    return (
        <div className="container flex-col space-around">
            <div className="github flex space-around">
                <div className="profile flex-col space-evenly">
                    {
                        user ? (
                            <>
                                <img src={user.avatar_url} alt="avatar" className="avatar"/>
                                <a href={user.html_url} className="profile-name link"><h1>{user.login}</h1></a>
                                <p className="bio">{user.bio}</p>
                            </>
                        ) : (
                            <h1>Loading ...</h1>
                        )
                    (

                    )
                    }
                </div>

                <div className="repos flex space-between flex-wrap">
                    {
                        repos ? (
                            repos.map((repo, i) => (
                                <Repo key={i} name={repo.name} description={repo.description ? repo.description : "no description"} url={repo.html_url} />
                            ))
                        ) : (
                            <h1>Loading ...</h1>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

Github.propTypes = {
    username: PropTypes.string
}

export default Github
