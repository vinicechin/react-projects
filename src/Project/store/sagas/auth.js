import { put, delay } from 'redux-saga/effects'

import * as actionCreators from '../actions/auth'

export function* logoutSaga(action) {
    yield localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY)
    yield localStorage.removeItem(process.env.REACT_APP_USERID_KEY)
    yield localStorage.removeItem(process.env.REACT_APP_EXPIRATION_DATE_KEY)
    yield put(actionCreators.authLogout())
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime)
    yield put(actionCreators.authLogoutStart())
}
