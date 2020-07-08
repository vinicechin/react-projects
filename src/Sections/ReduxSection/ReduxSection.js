import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import Counter from '../shared/components/Counter/Counter'
import reducer from '../shared/store/reducer'

const logger = store => {
    return next => {
        return action => {
            console.log('[Log] old state', store.getState())
            console.log('[Log] Dispatching', action)
            const result = next(action)
            console.log('[Log] next state', store.getState())
            return result
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)))

const ReduxSection = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}

export default ReduxSection