import React from 'react'

import classes from './PizzaImage.css'
import pizzaImg from '../../assets/pizza.jpg'

const PizzaImage = () => {
    return (
        <div className={classes.PizzaImageWrapper} >
            <img src={pizzaImg} alt="pizza image" className={classes.PizzaImage} />
        </div>
    )
}
 
export default PizzaImage