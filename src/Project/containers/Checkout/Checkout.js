import React, { Component } from 'react'

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