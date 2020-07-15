import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import classes from './Auth.module.css'
import Input, { createInput, checkValidity } from '../../components/UI/Input/Input'
import Button, { btnTypes } from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actionCreators from '../../store/actions'

class Auth extends Component {
    state = {
        form: {
            email: createInput({
                name: 'auth-email',
                placeholder: 'Email',
                type: 'email',
                validation: { required: true, email: true }
            }),
            password: createInput({
                name: 'auth-password',
                placeholder: 'Password',
                type: 'password',
                validation: { required: true, minLen: 6 }
            })
        },
        valid: false,
        isSignup: true
    }

    componentDidMount() {
        if (!this.props.building && this.props.authRedirectPath !== this.props.parentPath) {
            this.props.setRedirectPath(this.props.parentPath)
        }
    }

    checkFormValidity = (form) => {
        return Object.keys(form)
            .reduce((isValid, key) => {
                return isValid && (form[key].validation ? form[key].valid : true)
            }, true)
    }

    inputChangedHandler = (key, event) => {
        const value = event.target.value
        const input = { ...this.state.form[key] }

        if (input.validation) {
            input.valid = checkValidity(value, input.validation)
            input.touched = true
        }

        const form = {
            ...this.state.form,
            [key]: {
                ...input,
                value
            }
        }

        this.setState({
            form,
            valid: this.checkFormValidity(form)
        })
    }

    authHandler = (event) => {
        event.preventDefault()
        this.props.auth(this.state.form.email.value, this.state.form.password.value, this.state.isSignup)
    }

    toggleAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                isSignup: !prevState.isSignup
            }
        })
    }

    renderForm() {
        const inputs = Object.keys(this.state.form)
            .map(key => {
                const input = this.state.form[key]
                return (
                    <Input
                        changed={this.inputChangedHandler.bind(this, key)}
                        key={key}
                        type={input.type}
                        value={input.value}
                        label={input.label}
                        config={input.config}
                        options={input.options}
                        invalid={'valid' in input ? !input.valid && input.touched : false}
                    />
                )
            })

        return (
            <form onSubmit={this.authHandler}>
                {inputs}
                <Button type={btnTypes.success} disabled={!this.state.valid} >SUBMIT</Button>
            </form>
        )
    }

    render() {
        return (
            <>
                { this.props.isAuth ?
                    <Redirect to={this.props.authRedirectPath} /> :
                    <div className={classes.Auth}>
                        <p className={classes.Error} >{this.props.error && this.props.error.message}</p>
                        { this.props.loading ?
                            <Spinner /> :
                            this.renderForm()
                        }
                        <Button type={btnTypes.secondary} clicked={this.toggleAuthModeHandler} >
                            SWITCH TO { this.state.isSignup ? 'SIGN IN' : 'SIGN UP'}
                        </Button>
                    </div>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        building: state.builder.building,
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null,
        authRedirectPath: state.auth.redirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        auth: (email, password, isSignup) => dispatch(actionCreators.auth(email, password, isSignup)),
        setRedirectPath: (path) => dispatch(actionCreators.setRedirectPath(path))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Auth)