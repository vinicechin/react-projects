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
            <p className={errorClasses}>Please, enter a valid {props.config.name}</p>
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
            {props.label && <label className={classes.Label}>{props.label}</label>}
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

export const checkValidity = (value, rules) => {
    let isValid = true
    if (rules.required) {
        isValid &= (value.trim() !== '')
    }
    if (rules.minLen) {
        isValid &= (value.length >= rules.minLen)
    }
    if (rules.email) {
        isValid &= (value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) !== null)
    }
    return isValid
}

export const createInputWithLabel = (params) => {
    const label = params.label || 'Default'
    const input = createInput({
        type: params.type,
        name: label.toLowerCase().replace(' ', '-'),
        value: params.value,
        validation: params.validation,
        placeholder: params.placeholder
    })
    
    return { ...input, label }
}

export const createInput = (params) => {
    const type = params.type || 'text'
    const name = params.name || ''
    const validation = params.validation
    const placeholder = params.placeholder || ''
    const value = params.value || ''
    
    return {
        type: inputTypes.input,
        config: {
            type,
            name,
            placeholder
        },
        value,
        validation,
        valid: false,
        touched: false
    }
}

export const createSelectWithLabel = (params) => {
    const label = params.label || 'Default'
    const select = createSelect({
        type: params.type,
        name: label.toLowerCase().replace(' ', '-'),
        selected: params.selected,
        options: params.options
    })
    
    return { ...select, label }
}

export const createSelect = (params) => {
    const name = params.name || ''
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
            name
        },
        value: options[selected] ? options[selected].value : ''
    }
}