import { takeEvery } from 'redux-saga/effects'

import * as actionTypes from '../actions/types'
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth'

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_LOGOUT_START, logoutSaga)
    yield takeEvery(actionTypes.CHECK_AUTH_TIMEOUT, checkAuthTimeoutSaga)
    yield takeEvery(actionTypes.AUTH_START, authUserSaga)
    yield takeEvery(actionTypes.CHECK_AUTH_STATE, authCheckStateSaga)
}
