import React, { Component } from 'react'
import { connect } from 'react-redux'

import classes from './ContactData.module.css'
import axios from '../../../axios-orders'
import Button, { btnTypes } from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input, { createInput, createSelect } from '../../../components/UI/Input/Input'

class ContactData extends Component {
    state = {
        form: {
            name: createInput({ label: 'Name', placeholder: 'Your Name', validation: {required: true, minLen: 2} }),
            street: createInput({ label: 'Street', placeholder: 'Your Street', validation: {required: true} }),
            country: createInput({ label: 'Country', placeholder: 'Your Country' }),
            email: createInput({ label: 'Email', placeholder: 'Your Email', type: 'email', validation: {required: true, email: true} }),
            deliveryMethod: createSelect({ label: 'Delivery Method', options: ['Fastest', 'Cheapest'], selected: 0 })
        },
        loading: false,
        valid: false
    }

    checkValidity = (value, rules) => {
        let isValid = true
        if (rules.required) {
            isValid &= value.trim() !== ''
        }
        if (rules.minLen) {
            isValid &= value.length >= rules.minLen
        }
        if (rules.email) {
            isValid &= value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) !== null
        }
        return isValid
    }

    inputChangedHandler = (key, event) => {
        const value = event.target.value
        const input = { ...this.state.form[key] }

        if (input.validation) {
            input.valid = this.checkValidity(value, input.validation)
            input.touched = true
        }

        this.setState({
            form: {
                ...this.state.form,
                [key]: {
                    ...input,
                    value
                }
            },
            valid: Object.keys(this.state.form)
                .reduce((isValid, key) => {
                    return isValid && (this.state.form[key].validation ? this.state.form[key].valid : true)
                }, true)
        })
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({ loading: true })
        
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

        axios.post('/orders.json', order)
            .then(() => {
                this.setState({ loading: false })
                this.props.history.go(-2)
            })
            .catch(error => {
                alert(error)
                this.setState({ loading: false })
            })
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
        return <>{ this.state.loading ? <Spinner /> : this.renderForm() }</>
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
        ingredients: state.ingredients,
        price: state.total
    }
}
 
export default connect(mapStateToProps)(ContactData)