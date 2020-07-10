import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
    goBack = (nPages = -1) => {
        this.props.history.go(nPages)
    }

    checkoutCancelledHandler = () => {
        this.goBack()
    }

    checkoutContinuedHandler = () => {
        this.props.history.push(`${this.props.match.url}/contact-data`)
    }

    render() {
        console.log(this.props.ingredients)
        return (
            <div>
                { this.props.ingredients ?
                    this.props.purchased ? this.goBack(-2) :
                    (
                        <>
                            <CheckoutSummary
                                ingredients={this.props.ingredients}
                                cancelled={this.checkoutCancelledHandler}
                                continued={this.checkoutContinuedHandler}
                            />
                            <Route
                                path={`${this.props.match.url}/contact-data`}
                                component={ContactData}
                            />
                        </>
                    ) :
                    this.goBack()
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.builder.ingredients,
        purchased: state.order.purchased
    }
}
 
export default connect(mapStateToProps)(Checkout)