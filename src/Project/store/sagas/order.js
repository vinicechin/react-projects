import axios from '../../axios-orders'
import { put, delay } from 'redux-saga/effects'

import * as actionCreators from '../actions'

export function* purchaseBurgerSaga(action) {
    yield put(actionCreators.purchaseSent())

    if (process.env.NODE_ENV === 'development') {
        yield delay(1000)
        yield put(actionCreators.purchaseSuccess('order-2', action.order))
    } else {
        try {
            const response = yield axios.post(`/users/${action.userId}/orders.json?auth=${action.token}`, action.order)
            yield put(actionCreators.purchaseSuccess(response.data.name, action.order))
        } catch (error) {
            alert(error)
            yield put(actionCreators.purchaseFail(error))
        }
    }
}

export function* fetchOrdersSaga(action) {
    let { token, userId } = action
    if (token === null) {
        token = yield localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)
        userId = yield localStorage.getItem(process.env.REACT_APP_USERID_KEY)
    }

    yield put(actionCreators.fetchOrdersSent())
    if (process.env.NODE_ENV === 'development') {
        yield delay(1000)
        const orders = [{
            id: 'order-1',
            contactInfo: {
                country: '',
                deliveryMethod: 'fastest',
                email: 'teste@teste.com',
                name: 'teste',
                street: 'teste 1'
            },
            ingredients: {
                bacon: 3,
                cheese: 2,
                meat: 2,
                salad: 1
            },
            price: 10
        }]
        yield put(actionCreators.fetchOrdersSuccess(orders))
    } else {
        try {
            const response = yield axios.get(`/users/${userId}/orders.json?auth=${token}`)
            const orders = response.data
                ? Object.keys(response.data)
                    .map((key) => {
                        return {
                            id: key,
                            ...response.data[key]
                        }
                    })
                : []
            yield put(actionCreators.fetchOrdersSuccess(orders))
        } catch (error) {
            alert(error)
            const err = error.response ?
                error.response.data.error :
                error.request ?
                    error.request :
                    error.message
            console.log(err)
            yield put(actionCreators.fetchOrdersFail(err))
        }
    }
}
