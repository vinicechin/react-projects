import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import queryString from 'query-string'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }

    componentDidMount() {
        const query = queryString.parse(this.props.location.search, {parseNumbers: true})
        this.setState({
            ingredients: {
                bacon: query.bacon,
                cheese: query.cheese,
                meat: query.meat,
                salad: query.salad
            },
            price: query.price
        })
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
                {this.state.ingredients && (
                    <>
                        <CheckoutSummary
                            ingredients={this.state.ingredients}
                            cancelled={this.checkoutCancelledHandler}
                            continued={this.checkoutContinuedHandler}
                        />
                        <Route
                            path={`${this.props.match.url}/contact-data`}
                            render={ (props) => (
                                <ContactData
                                    {...props}
                                    ingredients={this.state.ingredients}
                                    price={this.state.price}
                                />
                            )}
                        />
                    </>
                )}
            </div>
        )
    }
}
 
export default Checkout