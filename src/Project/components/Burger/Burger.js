import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css';

const Burger = (props) => {
    const ingredients = Object.keys(props.ingredients).map((ingredient) => {
        return [...Array(props.ingredients[ingredient])].map((_, index) => {
            return <BurgerIngredient key={ingredient + index} type={ingredient} />
        })
    })

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            { ingredients }
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}
 
export default Burger;