const initialState = {
    skills: {
        languages: [],
        technologies: [],
        personalSkills: [],
        spokenLanguages: [],
        fetched: false,
    }
}

const data = (state = initialState, action) => {
    switch (action.type) {
        case "SKILLS":
            return {
                ...state,
                skills: action.payload,
            };
        default:
            return state
    }
}

export default data