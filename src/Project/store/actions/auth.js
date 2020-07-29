import axios from 'axios'
import * as actionTypes from './types'

const authSent = () => {
    return {
        type: actionTypes.AUTH_SENT
    }
}

const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        userId
    }
}

const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
}

export const setRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path
    }
}

export const authLogoutStart = () => {
    return {
        type: actionTypes.AUTH_LOGOUT_START
    }
}

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

const checkAuthTimeout = (expirationTime) => {
    return {
        type: actionTypes.CHECK_AUTH_TIMEOUT,
        expirationTime
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)
        const userId = localStorage.getItem(process.env.REACT_APP_USERID_KEY)
        if (token && userId) {
            const expirationDate = new Date(localStorage.getItem(process.env.REACT_APP_EXPIRATION_DATE_KEY))
            if (expirationDate > new Date()) {
                dispatch(authSuccess(token, userId))
                dispatch(checkAuthTimeout(expirationDate.getTime() - new Date().getTime()))
            } else {
                dispatch(authLogoutStart())
            }
        } else {
            dispatch(authLogoutStart())
        }
    }
}

const updateData = (dispatch, idToken, localId, expiresIn) => {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
    localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, idToken)
    localStorage.setItem(process.env.REACT_APP_USERID_KEY, localId)
    localStorage.setItem(process.env.REACT_APP_EXPIRATION_DATE_KEY, expirationDate)
    dispatch(authSuccess(idToken, localId))
    dispatch(checkAuthTimeout(expiresIn * 1000))
}

export const auth = (email, password, isSignUp) => {
    const data = {
        email,
        password,
        returnSecureToken: true
    }
    const url = isSignUp ?
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}` :
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`

    return dispatch => {
        if (process.env.NODE_ENV === 'development') {
            setTimeout(() => {
                updateData(dispatch, 'burger-test-account', 'vini1', 3600)
            }, 1000)
        } else {
            axios.post(url, data)
                .then( response => {
                    let { localId, idToken, expiresIn } = response.data
                    updateData(dispatch, idToken, localId, expiresIn)
                })
                .catch( (error) => {
                    const err = error.response ?
                        error.response.data.error :
                        error.request ?
                            error.request :
                            error.message
                    console.log(err)
                    dispatch(authFail(err))
                })
        }


        dispatch(authSent())
    }
}
