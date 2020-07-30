import * as actionTypes from './types'
import * as utils from '../utility'

export const purchaseSuccess = (id, order) => {
    return {
        type: actionTypes.PURCHASE_SUCCESS,
        order: utils.updateObject(order, { id })
    }
}

export const purchaseFail = (error) => {
    return {
        type: actionTypes.PURCHASE_FAIL,
        error
    }
}

export const purchaseSent = () => {
    return {
        type: actionTypes.PURCHASE_SENT
    }
}

export const purchaseBurger = (order, token, userId) => {
    return {
        type: actionTypes.PURCHASE_BURGER,
        order,
        token,
        userId
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

export const fetchOrdersSent = () => {
    return {
        type: actionTypes.FETCH_ORDERS_SENT
    }
}

export const fetchOrders = (token, userId) => {
    return {
        type: actionTypes.FETCH_ORDERS,
        token,
        userId
    }
}
