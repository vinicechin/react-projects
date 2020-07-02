import React, { Component } from 'react'

import classes from './ContactData.module.css'
import Button, { btnTypes } from '../../../components/UI/Button/Button'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            country: ''
        }
    }
    render() { 
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Your Street" />
                    <input className={classes.Input} type="text" name="country" placeholder="Your Country" />
                    <Button type={btnTypes.success} >ORDER</Button>
                </form>
            </div>
        )
    }
}
 
export default ContactData