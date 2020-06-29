import React from 'react'

import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button
        className={ [classes.Button, classes[props.type]].join(' ') }
        onClick={props.clicked}>
            {props.children}
        </button>
    )
}

export default Button

export const btnTypes = { success: 'Success', danger: 'Danger' }
