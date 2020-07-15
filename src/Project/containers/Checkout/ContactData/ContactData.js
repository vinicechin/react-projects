import React, { Component } from 'react'
import { connect } from 'react-redux'

import classes from './ContactData.module.css'
import Button, { btnTypes } from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input, { createInputWithLabel, createSelectWithLabel, checkValidity } from '../../../components/UI/Input/Input'
import * as actionCreators from '../../../store/actions'

class ContactData extends Component {
    state = {
        form: {
            name: createInputWithLabel({ placeholder: 'Your Name', validation: {required: true, minLen: 2} }),
            street: createInputWithLabel({ label: 'Street', placeholder: 'Your Street', validation: {required: true} }),
            country: createInputWithLabel({ label: 'Country', placeholder: 'Your Country' }),
            email: createInputWithLabel({ label: 'Email', placeholder: 'Your Email', type: 'email', validation: {required: true, email: true} }),
            deliveryMethod: createSelectWithLabel({ label: 'Delivery Method', options: ['Fastest', 'Cheapest'], selected: 0 })
        },
        valid: false
    }

    inputChangedHandler = (key, event) => {
        const value = event.target.value
        const input = { ...this.state.form[key] }

        if (input.validation) {
            input.valid = checkValidity(value, input.validation)
            input.touched = true
        }

        const form = {
            ...this.state.form,
            [key]: {
                ...input,
                value
            }
        }

        this.setState({
            form,
            valid: Object.keys(form)
                .reduce((isValid, key) => {
                    return isValid && (form[key].validation ? form[key].valid : true)
                }, true)
        })
    }

    orderHandler = (event) => {
        event.preventDefault()
        
        const contactInfo = Object.keys(this.state.form)
            .reduce((form, key) => {
                form[key] = this.state.form[key].value
                return form
            }, {})
        
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, // better calculated on the server (middleware attacks to app)
            contactInfo
        }

        this.props.orderBurger(order, this.props.token, this.props.userId)
    }

    renderForm() {
        const inputs = Object.keys(this.state.form)
            .map(key => {
                const input = this.state.form[key]
                return (
                    <Input
                        changed={this.inputChangedHandler.bind(this, key)}
                        key={key}
                        type={input.type}
                        value={input.value}
                        label={input.label}
                        config={input.config}
                        options={input.options}
                        invalid={'valid' in input ? !input.valid && input.touched : false}
                    />
                )
            })

        return (
            <form onSubmit={this.orderHandler}>
                {inputs}
                <Button type={btnTypes.success} disabled={!this.state.valid} clicked={this.orderHandler} >ORDER</Button>
            </form>
        )
    }

    renderContactData() {
        return <>{ this.props.loading ? <Spinner /> : this.renderForm() }</>
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {this.renderContactData()}
            </div>
        )
    }
}
 
const mapStateToProps = state => {
    return {
        ingredients: state.builder.ingredients,
        price: state.builder.total,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        orderBurger: (order, token, userId) => dispatch(actionCreators.purchaseBurger(order, token, userId))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ContactData)