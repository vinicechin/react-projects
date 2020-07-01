import React, { Component } from 'react'

class Course extends Component {
    render () {
        console.log(this.props)
        return (
            <div>
                <h1>_COURSE_TITLE_</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        )
    }
}

export default Course