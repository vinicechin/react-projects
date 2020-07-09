import * as actionTypes from './types'

const storeResult = (value) => {
    return { type: actionTypes.STORE_RESULT, value }
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
        type: actionTypes.DEL_RESULT,
        id
    }
}
