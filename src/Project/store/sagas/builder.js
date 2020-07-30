import { put } from 'redux-saga/effects'
import axios from '../../axios-orders'

import * as actionCreators from '../actions'

export function* initIngredientsSaga(action) {
    try {
        const { data } = yield axios.get('/ingredients.json')
        yield put(actionCreators.storeIngredients(data))
    } catch (error) {
        const err = error.response ?
            error.response.data.error :
            error.request ?
                error.request :
                error.message
        console.log(err)
        yield put(actionCreators.fetchIngredientsFailed())
    }
}
