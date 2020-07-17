import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import reducer from './store/reducers'

const composeEnhancers = process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null
    || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

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