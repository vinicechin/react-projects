import React, { Component } from 'react'
import { connect } from 'react-redux'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actionCreators from '../../store/actions'

export class Builder extends Component {
    state = {
        purchasing: false
    }

    componentDidMount() {
        this.props.initIngredients()
    }

    updatePurchasable() {
        const total = Object.keys(this.props.ingredients)
            .map(ingredient => {
                return this.props.ingredients[ingredient]
            })
            .reduce((total, count) => {
                return total + count
            }, 0)
        
        return total > 0
    }

    purchaseHandler = () => {
        if (this.props.isAuth) {
            this.setState({ purchasing: true })
        } else {
            this.props.setAuthRedirect(`${this.props.match.url}/checkout`)
            this.props.history.push(`${this.props.match.url}/auth`)
        }
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        this.props.startCheckout()
        this.props.history.push(`${this.props.match.url}/checkout`)
    }

    renderModal() {
        return (
            <Modal show={this.state.purchasing} closed={this.purchaseCancelHandler}>
                { this.props.ingredients &&
                    <OrderSummary
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        ingredients={this.props.ingredients}
                        price={this.props.total}
                    />
                }
            </Modal>
        )
    }

    renderBurger() {
        const disabled = { ...this.props.ingredients }
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0
        }

        return this.props.ingredients ?
            (<>
                <Burger ingredients={this.props.ingredients} />
                <BuildControls
                    ingredientAdded={this.props.addIngredient}
                    ingredientRemoved={this.props.removeIngredient}
                    ordered={this.purchaseHandler}
                    disabled={disabled}
                    price={this.props.total}
                    purchasable={this.updatePurchasable()}
                    isAuth={this.props.isAuth}
                />
            </>) :
            this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner />
    }

    render() {
        return (
            <>
                {this.renderModal()}
                {this.renderBurger()}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.builder.ingredients,
        total: state.builder.total,
        error: state.builder.error,
        isAuth: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (ingredient) => dispatch(actionCreators.addIngredient(ingredient)),
        removeIngredient: (ingredient) => dispatch(actionCreators.removeIngredient(ingredient)),
        initIngredients: () => dispatch(actionCreators.initIngredients()),
        startCheckout: () => dispatch(actionCreators.purchaseStart()),
        setAuthRedirect: (path) => dispatch(actionCreators.setRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Builder)