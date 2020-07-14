import { combineReducers } from 'redux'

import builderReducer from './builder'
import orderReducer from './order'
import authReducer from './auth'

const reducer = combineReducers({
    builder: builderReducer,
    order: orderReducer,
    auth: authReducer
})

export default reducer