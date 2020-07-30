import * as actionTypes from './types'

export const authSent = () => {
    return {
        type: actionTypes.AUTH_SENT
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        userId
    }
}

export const authFail = (error) => {
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

export const checkAuthTimeout = (expirationTime) => {
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

export const auth = (email, password, isSignUp) => {
    return {
        type: actionTypes.AUTH_START,
        email,
        password,
        isSignUp
    }
}
