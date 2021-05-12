const getUser = (user) => {
    return {
        type: "USER",
        payload: {
            ...user,
            fetched: true,
        },
    }
}

const getRepos = (repos) => {
    return {
        type: "REPOS",
        payload: {
            list: repos,
            fetched: true,
        }
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUser,
    getRepos,
}