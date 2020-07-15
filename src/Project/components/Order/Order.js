import React from 'react'

import classes from './Order.module.css'

const Order = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map(ingredient => {
            return <span className={classes.Ingredient} key={ingredient} >
                {ingredient} ({props.ingredients[ingredient]})
            </span>
        })

    return (
        <div className={classes.Order} >
            <p>Ingredients: {ingredients}</p>
            <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
        </div>
    )
}
 
export default Order