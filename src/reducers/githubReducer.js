const initialState = {
    user: {},
    repos: []
}

const data = (state = initialState, action) => {
    switch (action.type) {
        case "USER":
            return {
                ...state,
                user: action.user,
            };
        case "REPOS":
            return {
                ...state,
                repos: action.repos,
            };
        default:
            return state
    }
}

export default data