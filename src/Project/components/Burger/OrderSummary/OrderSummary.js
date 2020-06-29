import React from 'react';

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
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </>
    );
}
 
export default OrderSummary;