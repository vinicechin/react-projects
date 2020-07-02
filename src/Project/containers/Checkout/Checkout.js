import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import queryString from 'query-string'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    componentDidMount() {
        const ingredients = queryString.parse(this.props.location.search, {parseNumbers: true})
        this.setState({ ingredients })
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinuedHandler = () => {
        this.props.history.push(`${this.props.match.url}/contact-data`)
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    cancelled={this.checkoutCancelledHandler}
                    continued={this.checkoutContinuedHandler}
                />
                <Route path={`${this.props.match.url}/contact-data`} exact component={ContactData} />
            </div>
        )
    }
}
 
export default Checkout