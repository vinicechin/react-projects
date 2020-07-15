import React, { Component } from 'react'
import { connect } from 'react-redux'

import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actionCreators from '../../store/actions'

class ORders extends Component {
    componentDidMount() {
        this.props.fetchOrders(this.props.token, this.props.userId)
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
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: (token, userId) => dispatch(actionCreators.fetchOrders(token, userId))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ORders)