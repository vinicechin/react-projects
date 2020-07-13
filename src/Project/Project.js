import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'
import reducer from './store/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

class Project extends Component {
    render() {
        return (
            <Provider store={store}>
                <div style={{ textAlign: 'left' }}>
                    <Layout>
                        <Switch>
                            <Route path={`${this.props.match.url}/checkout`} component={Checkout} />
                            <Route path={`${this.props.match.url}/orders`} component={Orders} />
                            <Route path={`${this.props.match.url}/auth`} component={Auth} />
                            <Route path={this.props.match.url} exact component={BurgerBuilder} />
                        </Switch>
                    </Layout>
                </div>
            </Provider>
        )
    }
}

export default withRouter(Project)