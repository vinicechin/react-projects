import React, { Component } from 'react'

import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'

class Project extends Component {
    render() {
        return (
            <div style={{ textAlign: 'left' }}>
                <Layout>
                    <BurgerBuilder />
                    <Checkout />
                </Layout>
            </div>
        )
    }
}

export default Project