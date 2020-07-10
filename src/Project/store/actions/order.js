import axios from '../../axios-orders'
import * as actionTypes from './types'

export const purchaseSuccess = (id, order) => {
    return {
        type: actionTypes.PURCHASE_SUCCESS,
        id,
        order
    }
}

export const purchaseFail = (error) => {
    return {
        type: actionTypes.PURCHASE_FAIL,
        error
    }
}

const purchaseSent = () => {
    return {
        type: actionTypes.PURCHASE_SENT
    }
}

export const purchaseBurger = (order) => {
    return dispatch => {
        axios.post('/orders.json', order)
            .then( response => {
                dispatch(purchaseSuccess(response.data.name, order))
            })
            .catch( error => {
                alert(error)
                dispatch(purchaseFail(error))
            })
        
        dispatch(purchaseSent())
    }
}

export const purchaseStart = () => {
    return {
        type: actionTypes.PURCHASE_START
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error
    }
}

const fetchOrdersSent = () => {
    return {
        type: actionTypes.FETCH_ORDERS_SENT
    }
}

export const fetchOrders = () => {
    return dispatch => {
        axios.get('/orders.json')
            .then( response => {
                const orders = Object.keys(response.data)
                    .map((key) => {
                        return {
                            id: key,
                            ...response.data[key]
                        }
                    })
                dispatch(fetchOrdersSuccess(orders))
            })
            .catch( error => {
                alert(error)
                dispatch(fetchOrdersFail(error))
            })
        
        dispatch(fetchOrdersSent())
    }
}
