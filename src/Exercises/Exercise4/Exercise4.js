import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Persons from './containers/Persons';
import reducer from './store/reducer'

const store = createStore(reducer)

const Exercise4 = () => {
    return (
        <div>
            <ol>
                <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
            </ol>
            <Provider store={store}>
                <Persons />
            </Provider>
        </div>
    )
}

export default Exercise4
