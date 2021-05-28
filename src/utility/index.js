export const compareArray = (a, b) => {
    if (a.length !== b.length) return false
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false
    }
    return true
}

export const fadeInChildren = (parentClass, index, position) => {
    let parents = document.getElementsByClassName(parentClass)

    for (let i = 0; i < parents.length; i++) {
        let children = parents[i].children

        for (let i = 0; i < children.length; i++) {
            setTimeout(() => {
                children[i].classList.toggle("fade-invisible", !compareArray(index, position))
                children[i].classList.toggle("fade-in-and-up", compareArray(index, position))
            }, 150 * i)
        }
    }
}