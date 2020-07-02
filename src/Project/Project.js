import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'

class Project extends Component {
    render() {
        return (
            <div style={{ textAlign: 'left' }}>
                <Layout>
                    <Switch>
                        <Route path={`${this.props.match.url}/checkout`} component={Checkout} />
                        <Route path={this.props.match.url} exact component={BurgerBuilder} />
                    </Switch>
                </Layout>
            </div>
        )
    }
}

export default withRouter(Project)