import React, { Component } from 'react'
import queryString from 'querystring'

class Course extends Component {
    render () {
        const query = queryString.parse(this.props.location.search)
        return (
            <div>
                <h1>{ query['?title'] }</h1>
                <p>You selected the Course with ID: { this.props.match.params.id }</p>
            </div>
        )
    }
}

export default Course