import { takeEvery, all, takeLatest } from 'redux-saga/effects'

import * as actionTypes from '../actions/types'
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth'
import { initIngredientsSaga } from './builder'
import { purchaseBurgerSaga, fetchOrdersSaga } from './order'

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_LOGOUT_START, logoutSaga),
        takeEvery(actionTypes.CHECK_AUTH_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_START, authUserSaga),
        takeEvery(actionTypes.CHECK_AUTH_STATE, authCheckStateSaga)
    ])
}

export function* watchBuilder() {
    yield takeEvery(actionTypes.FETCH_INGREDIENTS, initIngredientsSaga)
}

export function* watchOrder() {
    yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga)
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga)
}
