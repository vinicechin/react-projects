import React, { Component } from 'react'
import queryString from 'query-string'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

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
        this.props.history.replace(`${this.props.match.url}/contact-data'`)
    }

    render() { 
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    cancelled={this.checkoutCancelledHandler}
                    continued={this.checkoutContinuedHandler}
                />
            </div>
        )
    }
}
 
export default Checkout