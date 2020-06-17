import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

import styles from "./Person.module.css"

class Person extends Component  {
    // Example on how to add ref to class based component
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext

    componentDidMount() {
        this.inputElementRef.current.focus()
        console.log(this.context.authenticated)
    }

    render() {
        // return [
        //     <p key="e1" onClick={props.click}>I'm a { props.name }! and i am { props.age } years old</p>,
        //     <p key="e2">{ props.children }</p>,
        //     <input key="e3" type="text" value={props.name} onChange={props.changed} />
        // ]
    
        // return <>
        //     <p onClick={props.click}>I'm a { props.name }! and i am { props.age } years old</p>
        //     <p>{ props.children }</p>
        //     <input type="text" value={props.name} onChange={props.changed} />
        // </>
        //There is also React.Fragment, that does the same as above

        return <div className={styles.Person}>
            {this.context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>}
            <p onClick={this.props.click}>I'm a { this.props.name }! and i am { this.props.age } years old</p>
            <p>{ this.props.children }</p>
            <input ref={this.inputElementRef} type="text" value={this.props.name} onChange={this.props.changed} />
        </div>
    }
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default Person
