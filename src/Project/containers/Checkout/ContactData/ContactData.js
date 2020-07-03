import React, { Component } from 'react'

import classes from './ContactData.module.css'
import axios from '../../../axios-orders'
import Button, { btnTypes } from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input, { inputTypes } from '../../../components/UI/Input/Input'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            country: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        
        this.setState({ loading: true })
        
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, // better calculated on the server (middleware attacks to app)
            customer: {
                name: 'Vinicius',
                address: {
                    street: 'Teste 1',
                    country: 'Luxembourg'
                },
                email: 'teste@teste.com'
            },
            deliveryMethod: 'fastest'
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

    renderForm() {
        return (
            <>
                {this.state.loading ?
                    <Spinner /> :
                    <form>
                        <Input type={inputTypes.input} label="Name" name="name" placeholder="Your Name" />
                        <Input type={inputTypes.input} label="Email" name="email" placeholder="Your Email" />
                        <Input type={inputTypes.input} label="Country" name="country" placeholder="Your Country" />
                        <Input type={inputTypes.input} label="Street" name="street" placeholder="Your Street" />
                        <Button type={btnTypes.success} clicked={this.orderHandler} >ORDER</Button>
                    </form>
                }
            </>
        )
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {this.renderForm()}
            </div>
        )
    }
}
 
export default ContactData