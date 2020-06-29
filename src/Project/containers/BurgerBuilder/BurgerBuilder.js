import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

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
        total: 0
    }

    addIngredientHandler = (type) => {
        const ingredients = { ...this.state.ingredients }
        ingredients[type] += 1
        const total = this.state.total + INGREDIENT_PRICES[type]
        this.setState({ ingredients, total })
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] <= 0) {
            return
        }
        const ingredients = { ...this.state.ingredients }
        ingredients[type] -= 1
        const total = this.state.total - INGREDIENT_PRICES[type]
        this.setState({ ingredients, total })
    }

    render() {
        const disabled = { ...this.state.ingredients }
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0
        }
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabled}
                />
            </>
        )
    }
}

export default BurgerBuilder