import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Person from '../Person/Person'

class ErrorBoundaries extends Component {
    state = {
        person: {id: 'p0', name: "Vini", age: 31, content: ""}
    }

    nameChangedHandler = (event) => {
        this.setState({ ...this.state.person, name:  event.target.value})
    }

    render() {
        return (
            <ErrorBoundary key={this.state.person.id}>
                <Person
                    changed={this.nameChangedHandler.bind(this)}
                    name={this.state.person.name}
                    age={this.state.person.age}>
                    {this.state.person.content}
                </Person>
            </ErrorBoundary>
        );
    }
}

export default ErrorBoundaries;
