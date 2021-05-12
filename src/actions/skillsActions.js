const getSkills = (skills) => {
    return {
        type: "SKILLS",
        payload: {
            ...skills,
            fetched: true,
        },
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getSkills,
}