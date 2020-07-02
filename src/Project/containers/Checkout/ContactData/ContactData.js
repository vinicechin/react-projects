import React, { Component } from 'react'

import classes from './ContactData.module.css'
import axios from '../../../axios-orders'
import Button, { btnTypes } from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'

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
                        <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                        <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                        <input className={classes.Input} type="text" name="street" placeholder="Your Street" />
                        <input className={classes.Input} type="text" name="country" placeholder="Your Country" />
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