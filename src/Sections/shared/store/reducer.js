import { combineReducers } from 'redux'

import counterReducer from './reducers/counter'
import resultsReducer from './reducers/results'


const reducer = combineReducers({
    control: counterReducer,
    storage: resultsReducer
})

export default reducer