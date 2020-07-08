export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUB = 'SUB'
export const STORE_RESULT = 'STORE_RESULT'
export const DEL_RESULT = 'DEL_RESULT'

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = (value) => {
    return {
        type: ADD,
        value
    }
}

export const sub = (value) => {
    return {
        type: SUB,
        value
    }
}

const storeResult = (value) => {
    return { type: STORE_RESULT, value }
}

export const saveResult = (value) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(storeResult(value))
        }, 2000)
    }
}

export const deleteResult = (id) => {
    return {
        type: DEL_RESULT,
        id
    }
}