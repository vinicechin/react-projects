import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // compare refs of person (is crating a new one on update)
    return nextProps.persons !== this.props.persons
  }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(index, event)}
          key={person.id}
          name={person.name}
          age={person.age}>
              {person.content}
        </Person>
      )
    })
  }
}

export default Persons