import axios from '../../axios-orders'
import * as actionTypes from './types'

export const addIngredient = ingredient => {
    return { type: actionTypes.ADD_INGREDIENT, ingredient }
}

export const removeIngredient = ingredient => {
    return { type: actionTypes.REMOVE_INGREDIENT, ingredient }
}

const storeIngredients = ingredients => {
    return {
        type: actionTypes.STORE_INGREDIENTS,
        ingredients: {
            salad: ingredients.salad,
            bacon: ingredients.bacon,
            cheese: ingredients.cheese,
            meat: ingredients.meat
        }
    }
}

const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then(({ data }) => {
                dispatch(storeIngredients(data))
            })
            .catch((error) => {
                const err = error.response ?
                    error.response.data.error :
                    error.request ?
                        error.request :
                        error.message
                console.log(err)
                dispatch(fetchIngredientsFailed())
            })
    }
}
