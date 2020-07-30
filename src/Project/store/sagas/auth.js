import { put, delay } from 'redux-saga/effects'
import axios from 'axios'

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

export function* authUserSaga(action) {
    const data = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    }
    const url = action.isSignUp ?
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}` :
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`

    if (process.env.NODE_ENV === 'development') {
        yield delay(1000)
        yield updateData('burger-test-account', 'vini1', 3600)
    } else {
        try {
            const response = yield axios.post(url, data)
            
            let { localId, idToken, expiresIn } = response.data
            yield updateData(idToken, localId, expiresIn)
        } catch (error) {
            const err = error.response ?
                error.response.data.error :
                error.request ?
                    error.request :
                    error.message
            console.log(err)
            yield put(actionCreators.authFail(err))
        }
    }

    yield put(actionCreators.authSent())
}

function* updateData(idToken, localId, expiresIn) {
    const expirationDate = yield new Date(new Date().getTime() + expiresIn * 1000)
    yield localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, idToken)
    yield localStorage.setItem(process.env.REACT_APP_USERID_KEY, localId)
    yield localStorage.setItem(process.env.REACT_APP_EXPIRATION_DATE_KEY, expirationDate)
    yield put(actionCreators.authSuccess(idToken, localId))
    yield put(actionCreators.checkAuthTimeout(expiresIn * 1000))
}
