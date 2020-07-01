import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal'
import axios from '../../axios-orders'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        total: 0,
        purchasable: false,
        purchasing: false
    }

    updatePurchasable(ingredients) {
        const total = Object.keys(ingredients)
            .map(ingredient => {
                return ingredients[ingredient]
            })
            .reduce((total, count) => {
                return total + count
            }, 0)
        this.setState({ purchasable: total > 0 })
    }

    addIngredientHandler = (type) => {
        const ingredients = { ...this.state.ingredients }
        ingredients[type] += 1
        const total = this.state.total + INGREDIENT_PRICES[type]
        this.setState({ ingredients, total })
        this.updatePurchasable(ingredients)
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] <= 0) {
            return
        }
        const ingredients = { ...this.state.ingredients }
        ingredients[type] -= 1
        const total = this.state.total - INGREDIENT_PRICES[type]
        this.setState({ ingredients, total })
        this.updatePurchasable(ingredients)
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        // alert('You continued buying your burger')
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.total, // better calculated on the server (middleware attacks to app)
            customer: {
                name: 'Vinicius',
                address: {
                    street: 'Teste 1',
                    country: 'Luxembourg'
                },
                email: 'teste@teste.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    render() {
        const disabled = { ...this.state.ingredients }
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0
        }
        return (
            <>
                <Modal show={this.state.purchasing} closed={this.purchaseCancelHandler}>
                    <OrderSummary
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        ingredients={this.state.ingredients}
                        price={this.state.total}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    ordered={this.purchaseHandler}
                    disabled={disabled}
                    price={this.state.total}
                    purchasable={this.state.purchasable}
                />
            </>
        )
    }
}

export default BurgerBuilder