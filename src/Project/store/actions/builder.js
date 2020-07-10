import * as actionTypes from './types'

export const addIngredient = ingredient => {
    return { type: actionTypes.ADD_INGREDIENT, ingredient }
}

export const removeIngredient = ingredient => {
    return { type: actionTypes.REMOVE_INGREDIENT, ingredient }
}
