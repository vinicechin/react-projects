import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-orders'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        total: 0,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(({ data }) => {
                this.setState({ingredients: data})
            })
            .catch((error) => {
                console.log(error)
                this.setState({ error: true })
            })
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
        // this.setState({ loading: true })
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.total, // better calculated on the server (middleware attacks to app)
        //     customer: {
        //         name: 'Vinicius',
        //         address: {
        //             street: 'Teste 1',
        //             country: 'Luxembourg'
        //         },
        //         email: 'teste@teste.com'
        //     },
        //     deliveryMethod: 'fastest'
        // }
        // axios.post('/orders.json', order)
        //     .then(response => {
        //         this.setState({ loading: false, purchasing: false })
        //     })
        //     .catch(error => {
        //         alert(error)
        //         this.setState({ loading: false, purchasing: false })
        //     })
        this.props.history.push(`${this.props.match.url}/checkout`)
    }

    renderModal() {
        const modalContent = this.state.loading ?
            <Spinner /> :
            this.state.ingredients &&
            <OrderSummary
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                ingredients={this.state.ingredients}
                price={this.state.total}
            />

        return (
            <Modal show={this.state.purchasing} closed={this.purchaseCancelHandler}>
                { modalContent }
            </Modal>
        )
    }

    renderBurger() {
        const disabled = { ...this.state.ingredients }
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0
        }

        return this.state.ingredients ?
            (<>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    ordered={this.purchaseHandler}
                    disabled={disabled}
                    price={this.state.total}
                    purchasable={this.state.purchasable}
                />
            </>) :
            this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />
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

export default BurgerBuilder