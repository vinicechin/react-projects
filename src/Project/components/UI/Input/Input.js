import React from 'react'

import classes from './Input.module.css'

const Input = (props) => {
    const inputs = {
        input: 
            <input 
                className={classes.InputElement}
                {...props.config}
                value={props.value}
                onChange={props.changed}
            />,
        textarea: 
            <textarea 
                className={classes.InputElement}
                {...props.config}
                value={props.value}
                onChange={props.changed}
            />,
        select:
            <select className={classes.InputElement} {...props.config.select} onChange={props.changed}>
                {props.config.options &&
                    props.config.options.map(option => {
                        const value = option.toLowerCase()
                        return (
                            <option value={value} key={value}>{option}</option>
                        )
                    })
                }
            </select>
    }
    
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.config.label}</label>
            {inputs[props.type]}
        </div>
    )
}
 
export default Input

export const inputTypes = {
    input: 'input',
    textarea: 'textarea',
    select: 'select'
}

export const createInput = (label='Default', placeholder='', type='text', value='') => {
    return {
        type: inputTypes.input,
        config: {
            type,
            label,
            name: label.toLowerCase().replace(' ', '-'),
            placeholder
        },
        value           
    }
}

export const createSelect = (label='Default', options=[], value='') => {
    return {
        type: inputTypes.select,
        config: {
            options,
            label,
            select: {
                name: label.toLowerCase().replace(' ', '-')
            }
        },
        value: ''
    }
}