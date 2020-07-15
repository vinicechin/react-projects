import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from '../../components/Layout/Layout'
import Builder from '../Builder/Builder'
import Checkout from '../Checkout/Checkout'
import Orders from '../Orders/Orders'
import Auth from '../Auth/Auth'
import Logout from '../Auth/Logout/Logout'
import * as actionCreators from '../../store/actions'

class BurgerBuilder extends Component {
    componentDidMount() {
        this.props.autoSignOn()
    }

    render() {
        return (
            <div style={{ textAlign: 'left' }}>
                <Layout>
                    <Switch>
                        <Route path={`${this.props.match.url}/auth`} children={
                            <Auth parentPath={this.props.match.url} />
                        }/>
                        { this.props.isAuth && <Route path={`${this.props.match.url}/checkout`} component={Checkout} /> }
                        { this.props.isAuth && <Route path={`${this.props.match.url}/orders`} component={Orders} />}
                        { this.props.isAuth &&
                            <Route path={`${this.props.match.url}/logout`} children={
                                <Logout parentPath={this.props.match.url} />
                            }/>
                        }
                        <Route path={this.props.match.url} exact component={Builder} />
                        { !this.props.isAuth && <Redirect to={this.props.match.url} /> }
                    </Switch>
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        autoSignOn: () => dispatch(actionCreators.authCheckState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BurgerBuilder))