import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as actionCreators from '../../../store/actions'

class Logout extends Component {
    componentDidMount() {
        this.props.logout()
    }

    render() {
        return <Redirect to={this.props.parentPath} />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actionCreators.authLogout())
    }
}
 
export default connect(null, mapDispatchToProps)(Logout)