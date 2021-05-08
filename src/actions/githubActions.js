const getUser = (user) => {
    return {
        type: "USER",
        user: user,
    }
}

const getRepos = (repos) => {
    return {
        type: "REPOS",
        repos: repos,
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUser,
    getRepos,
}