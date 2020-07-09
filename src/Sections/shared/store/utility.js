export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
}

export const addToArray = (params) => {
    const { array, index, start, value} = params
    
    if (start) return [value, ...array]

    if (index) return [
        ...array.slice(0, index),
        value,
        ...array.slice(index)
    ]

    return [...array, value]
}

export const deleteFromArray = (params) => {
    const { array, index, prop } = params

    if (index) return [
        ...array.slice(0, index),
        ...array.slice(index)
    ]

    if (prop) return array.filter(item => {
        return item[prop.key] !== prop.value
    })

    return [...array]
}