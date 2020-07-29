import { put } from 'redux-saga/effects'

import * as actionTypes from '../actions/types'

function* logout(action) {
    yield localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY)
    yield localStorage.removeItem(process.env.REACT_APP_USERID_KEY)
    yield localStorage.removeItem(process.env.REACT_APP_EXPIRATION_DATE_KEY)
    yield put({
        type: actionTypes.AUTH_LOGOUT
    })
}