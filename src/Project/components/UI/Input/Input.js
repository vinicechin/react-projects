import React from 'react'

import classes from './Input.module.css'

const Input = (props) => {
    const inputs = {
        input: <input className={classes.InputElement} {...props} />,
        textarea: <textarea className={classes.InputElement} {...props} />
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputs[props.type]}
        </div>
    )
}
 
export default Input

export const inputTypes = {
    input: 'input',
    textarea: 'textarea'
}