import * as actionTypes from '../actions/types'
import * as utils from '../utility'

const initialState = {
    orders: [],
    loading: false,
    error: '',
    purchased: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_START: return utils.updateObject(state, { purchased: false })
        case actionTypes.PURCHASE_SENT: return utils.updateObject(state, { loading: true })
        case actionTypes.PURCHASE_SUCCESS: return purchaseSuccess(state, action)
        case actionTypes.PURCHASE_FAIL: return utils.updateObject(state, { loading: false, error: action.error })
        case actionTypes.FETCH_ORDERS_SENT: return utils.updateObject(state, { loading: true })
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action)
        case actionTypes.FETCH_ORDERS_FAIL: return utils.updateObject(state, { loading: false, error: action.error })
        default: return state
    }
}

const purchaseSuccess = (state, action) => {
    return utils.updateObject(state, {
        loading: false,
        purchased: true,
        orders: utils.addToArray({ array: state.orders, value: action.order })
    })
}

const fetchOrdersSuccess = (state, action) => {
    return utils.updateObject(state, {
        loading: false,
        purchased: true,
        orders: action.orders
    })
}

export default reducer
