import * as actionTypes from '../actions/types'

const initialState = {
    orders: [],
    loading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PURCHASE_SUCCESS:
            const order = { ...action.order, id: action.id }
            return {
                ...state,
                loading: false,
                orders: [ ...state.orders, order ]
            }
        case actionTypes.PURCHASE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default reducer
