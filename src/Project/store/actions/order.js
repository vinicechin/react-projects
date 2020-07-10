import axios from '../../axios-orders'
import * as actionTypes from './types'

export const purchaseSuccess = (id, order) => {
    return {
        type: actionTypes.PURCHASE_SUCCESS,
        id,
        order
    }
}

export const purchaseFail = (error) => {
    return {
        type: actionTypes.PURCHASE_FAIL,
        error
    }
}

const purchaseSent = () => {
    return {
        type: actionTypes.PURCHASE_SENT
    }
}

export const purchaseBurger = (order) => {
    return dispatch => {
        axios.post('/orders.json', order)
            .then( response => {
                dispatch(purchaseSuccess(response.data.name, order))
                // this.setState({ loading: false })
                // this.props.history.go(-2)
            })
            .catch( error => {
                alert(error)
                dispatch(purchaseFail(error))
                // this.setState({ loading: false })
            })
        
        dispatch(purchaseSent())
    }
}

export const purchaseStart = () => {
    return {
        type: actionTypes.PURCHASE_START
    }
}