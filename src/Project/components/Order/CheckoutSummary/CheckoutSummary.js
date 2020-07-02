import React from 'react'

import classes from './CheckoutSummary.module.css'
import Burger from '../../Burger/Burger'
import Button, { btnTypes } from '../../UI/Button/Button'

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary} >
            <h1>We hope it tastes good!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button type={btnTypes.danger} clicked >CANCEL</Button>
            <Button type={btnTypes.success} clicked >CONTINUE</Button>
        </div>
    )
}
 
export default CheckoutSummary