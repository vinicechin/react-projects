import { combineReducers } from 'redux'

import builderReducer from './builder'
import orderReducer from './order'

const reducer = combineReducers({
    builder: builderReducer,
    order: orderReducer
})

export default reducer