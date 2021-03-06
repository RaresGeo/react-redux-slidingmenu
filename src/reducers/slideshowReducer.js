const initialState = {
    index: [0, 0]
}

const page = (state = initialState, action) => {
    switch (action.type) {
        case "GOTO":
            return {
                ...state,
                index: action.payload
            };
        default:
            return state
    }
}

export default page