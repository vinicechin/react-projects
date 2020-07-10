import * as actionTypes from '../actions/types'

const initialState = {
    orders: [],
    loading: false,
    error: '',
    purchased: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_START:
            return {
                ...state,
                purchased: false
            }
        case actionTypes.PURCHASE_SENT:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PURCHASE_SUCCESS:
            const order = { id: action.id, ...action.order}
            return {
                ...state,
                loading: false,
                purchased: true,
                orders: [ ...state.orders, order ]
            }
        case actionTypes.PURCHASE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.FETCH_ORDERS_SENT:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.orders
            }
        case actionTypes.FETCH_ORDERS_FAIL:
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
