import * as actionTypes from './types'

export const addIngredient = ingredient => {
    return { type: actionTypes.ADD_INGREDIENT, ingredient }
}

export const removeIngredient = ingredient => {
    return { type: actionTypes.REMOVE_INGREDIENT, ingredient }
}

export const storeIngredients = ingredients => {
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

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS
    }
}
