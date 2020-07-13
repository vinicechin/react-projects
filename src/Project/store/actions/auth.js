import axios from 'axios'
import * as actionTypes from './types'

const authSent = () => {
    return {
        type: actionTypes.AUTH_SENT
    }
}

const authSuccess = (data) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        data
    }
}

const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
}

export const auth = (email, password) => {
    const data = {
        email,
        password,
        returnSecureToken: true
    }

    return dispatch => {
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.API_KEY}`, data)
            .then( response => {
                dispatch(authSuccess(response.data))
            })
            .catch( error => {
                alert(error)
                dispatch(authFail(error))
            })

        dispatch(authSent())
    }
}
