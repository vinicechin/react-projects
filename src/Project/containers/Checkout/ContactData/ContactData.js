import React, { Component } from 'react'

import classes from './ContactData.module.css'
import axios from '../../../axios-orders'
import Button, { btnTypes } from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input, { createInput, createSelect } from '../../../components/UI/Input/Input'

class ContactData extends Component {
    state = {
        form: {
            name: createInput('Name', 'Your Name', 'text'),
            street: createInput('Street', 'Your Street', 'text'),
            country: createInput('Country', 'Your Country', 'text'),
            email: createInput('Email', 'Your Email', 'email'),
            deliveryMethod: createSelect('Delivery Method', ['Fastest', 'Cheapest'])
        },
        loading: false
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
            .then(response => {
                this.setState({ loading: false })
                this.props.history.go(-2)
            })
            .catch(error => {
                alert(error)
                this.setState({ loading: false })
            })
    }

    inputChangedHandler = (key, event) => {
        this.setState({
            form: {
                ...this.state.form,
                [key]: {
                    ...this.state.form[key],
                    value: event.target.value
                }
            }
        })
    }

    renderForm() {
        const inputs = Object.keys(this.state.form)
            .map(key => {
                const input = this.state.form[key]
                return (
                    <Input
                        key={key}
                        type={input.type}
                        value={input.value}
                        config={input.config}
                        changed={this.inputChangedHandler.bind(this, key)}
                    />
                )
            })

        return (
            <form onSubmit={this.orderHandler}>
                {inputs}
                <Button type={btnTypes.success} clicked={this.orderHandler} >ORDER</Button>
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
 
export default ContactData