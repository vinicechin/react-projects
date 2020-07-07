import React from 'react'
import classNames from 'classnames'

import classes from './Input.module.css'

const Input = (props) => {
    const inputClasses = classNames({
        [classes.InputElement]: true,
        [classes.Invalid]: props.invalid,
    })

    const validationError = () => {
        const errorClasses = classNames({
            [classes.ValidationError]: true,
            [classes.Invisible]: !props.invalid,
        })

        return (
            <p className={errorClasses}>Please, enter a valid {props.label.toLowerCase()}</p>
        )
    }

    const inputs = {
        input: 
            <input 
                className={inputClasses}
                {...props.config}
                value={props.value}
                onChange={props.changed}
            />,
        textarea: 
            <textarea 
                className={inputClasses}
                {...props.config}
                value={props.value}
                onChange={props.changed}
            />,
        select:
            <select className={inputClasses} {...props.config} value={props.value} onChange={props.changed}>
                {props.options &&
                    props.options.map(option => {
                        return (
                            <option value={option.value} key={option.value} >{option.label}</option>
                        )
                    })
                }
            </select>
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputs[props.type]}
            {validationError()}
        </div>
    )
}
 
export default Input

export const inputTypes = {
    input: 'input',
    textarea: 'textarea',
    select: 'select'
}

export const createInput = (params) => {
    const type = params.type || 'text'
    const label = params.label || 'Default'
    const validation = params.validation
    const placeholder = params.placeholder || ''
    const value = params.value || ''
    
    return {
        type: inputTypes.input,
        config: {
            type,
            name: label.toLowerCase().replace(' ', '-'),
            placeholder
        },
        label,
        value,
        validation,
        valid: false,
        touched: false
    }
}

export const createSelect = (params) => {
    const label = params.label || 'Default'
    const selected = params.selected || 0
    const options = params.options ? 
        params.options.map((option) => {
            return {
                value: option.toLowerCase(),
                label: option,
            }
        }) : []

    return {
        type: inputTypes.select,
        options,
        config: {
            name: label.toLowerCase().replace(' ', '-')
        },
        label,
        value: options[selected] ? options[selected].value : ''
    }
}