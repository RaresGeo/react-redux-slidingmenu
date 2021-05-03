const goTo = (index) => {
    return {
        type: "GOTO",
        index: index
    }
}

export default {
    goTo
}