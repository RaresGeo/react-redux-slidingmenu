const goTo = (index) => {
    return {
        type: "GOTO",
        payload: index
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    goTo,
}