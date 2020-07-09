import * as actionTypes from './types'

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        value
    }
}

export const sub = (value) => {
    return {
        type: actionTypes.SUB,
        value
    }
}