import React, { Component } from 'react'
import { connect } from 'react-redux'

import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actionCreators from '../../store/actions'

class ORders extends Component {
    componentDidMount() {
        this.props.fetchOrders()
    }

    render() { 
        return (
            <div>
                {this.props.loading ? 
                    <Spinner /> :
                    this.props.orders.map((order) => {
                        return <Order key={order.id} ingredients={order.ingredients} price={order.price} />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(actionCreators.fetchOrders())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ORders)