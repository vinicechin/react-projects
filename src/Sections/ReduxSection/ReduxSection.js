import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Counter from '../shared/components/Counter/Counter'
import reducer from '../shared/store/reducer'

const store = createStore(reducer)

const ReduxSection = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}

export default ReduxSection