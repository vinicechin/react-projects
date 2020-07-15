import * as actionTypes from '../actions/types'
import * as utils from '../utility'

const INGREDIENT_PRICES = { salad: 0.5, cheese: 0.4, meat: 1.3, bacon: 0.7 }

const initialState = {
    ingredients: null,
    total: 0,
    error: false,
    building: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action)
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action)
        case actionTypes.STORE_INGREDIENTS: return storeIngredients(state, action)
        case actionTypes.FETCH_INGREDIENTS_FAILED: return utils.updateObject(state, { error: true })
        default: return state
    }
}

const addIngredient = (state, action) => {
    return utils.updateObject(state, {
        ingredients: utils.updateObject(state.ingredients, { 
            [action.ingredient]: state.ingredients[action.ingredient] + 1 
        }),
        total: state.total + INGREDIENT_PRICES[action.ingredient],
        building: true
    })
}

const removeIngredient = (state, action) => {
    return utils.updateObject(state, {
        ingredients: utils.updateObject(state.ingredients, { 
            [action.ingredient]: state.ingredients[action.ingredient] - 1 
        }),
        total: state.total - INGREDIENT_PRICES[action.ingredient],
        building: true
    })
}

const storeIngredients = (state, action) => {
    return utils.updateObject(state, {
        ingredients: action.ingredients,
        total: utils.sumValuesWithRef(action.ingredients, INGREDIENT_PRICES),
        error: false,
        building: false
    })
}

export default reducer