import React from 'react';

import Button, { btnTypes } from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map((type) => {
            return (
                <li key={type}>
                    <span style={ {textTransform: 'capitalize'} }>{ type }</span>: { props.ingredients[type] }
                </li>
            )
        })

    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {ingredientsSummary}
            </ul>
    <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button type={btnTypes.danger} clicked={props.purchaseCancelled} >CANCEL</Button>
            <Button type={btnTypes.success} clicked={props.purchaseContinued} >CONTINUE</Button>
        </>
    );
}
 
export default OrderSummary;