import reducer from './auth'
import * as actionTypes from '../actions/types'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    redirectPath: ''
}

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should store token on sign on', () => {
        expect(reducer(initialState, {
            type: actionTypes.AUTH_SUCCESS,
            token: 'some-token',
            userId: 'some-user-id'
        })).toEqual({
            ...initialState,
            token: 'some-token',
            userId: 'some-user-id'
        })
    })
})
