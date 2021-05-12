const initialState = {
    user: {
        fetched: false,
    },
    repos: {
        list: [],
        fetched: false,
    },
}

const data = (state = initialState, action) => {
    switch (action.type) {
        case "USER":
            return {
                ...state,
                user: action.payload,
            };
        case "REPOS":
            return {
                ...state,
                repos: action.payload,
            };
        default:
            return state
    }
}

export default data