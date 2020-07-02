import React, { Component } from 'react'

import axios from '../../axios-orders'
import Order from '../../components/Order/Order'

class ORders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const orders = Object.keys(response.data)
                    .map((key) => {
                        return {
                            id: key,
                            ...response.data[key]
                        }
                    })
                this.setState({ loading: false, orders })
            })
            .catch(err => {
                alert(err)
                this.setState({ loading: false })
            })
    }

    render() { 
        return (
            <div>
                {this.state.orders.map((order) => {
                    return <Order key={order.id} ingredients={order.ingredients} price={order.price} />
                })}
            </div>
        )
    }
}
 
export default ORders