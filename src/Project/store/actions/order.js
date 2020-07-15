import axios from '../../axios-orders'
import * as actionTypes from './types'
import * as utils from '../utility'

const purchaseSuccess = (id, order) => {
    return {
        type: actionTypes.PURCHASE_SUCCESS,
        order: utils.updateObject(order, { id })
    }
}

const purchaseFail = (error) => {
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

export const purchaseBurger = (order, token, userId) => {
    return dispatch => {
        axios.post(`/users/${userId}/orders.json?auth=${token}`, order)
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

const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders
    }
}

const fetchOrdersFail = (error) => {
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

export const fetchOrders = (token, userId) => {
    if (token === null) {
        token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)
        userId = localStorage.getItem(process.env.REACT_APP_USERID_KEY)
    }
    return dispatch => {
        axios.get(`/users/${userId}/orders.json?auth=${token}`)
            .then( response => {
                const orders = response.data
                    ? Object.keys(response.data)
                        .map((key) => {
                            return {
                                id: key,
                                ...response.data[key]
                            }
                        })
                    : []
                dispatch(fetchOrdersSuccess(orders))
            })
            .catch( error => {
                alert(error)
                const err = error.response ?
                    error.response.data.error :
                    error.request ?
                        error.request :
                        error.message
                console.log(err)
                dispatch(fetchOrdersFail(err))
            })
        
        dispatch(fetchOrdersSent())
    }
}
