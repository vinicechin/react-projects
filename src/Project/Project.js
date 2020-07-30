import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import reducer from './store/reducers'
import { watchAuth, watchBuilder } from './store/sagas'

const composeEnhancers = process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null
    || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(watchAuth)
sagaMiddleware.run(watchBuilder)

class Project extends Component {
    render() {
        return (
            <Provider store={store}>
                <BurgerBuilder />
            </Provider>
        )
    }
}

export default Project