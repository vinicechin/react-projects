import * as actionTypes from '../actions/types'
import { updateObject, addToArray, deleteFromArray } from '../utility'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT: return storeResult(state, action)
        case actionTypes.DEL_RESULT: return deleteResult(state, action)
        default: return state
    }
}

const storeResult = (state, action) => {
    return updateObject(state, {
        results: addToArray({
            array: state.results,
            value: { id: new Date(), value: action.value }
        })
    })
}

const deleteResult = (state, action) => {
    return updateObject(state, {
        results: deleteFromArray({
            array: state.results,
            prop: { key: 'id', value: action.id }
        })
    })
}

export default reducer
