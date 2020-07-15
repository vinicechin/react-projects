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

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout())
        }, expirationTime * 1000)
    }
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
        axios.post(url, data)
            .then( response => {
                const { localId, idToken, expiresIn } = response.data
                dispatch(authSuccess(idToken, localId))
                dispatch(checkAuthTimeout(expiresIn))
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

        dispatch(authSent())
    }
}
