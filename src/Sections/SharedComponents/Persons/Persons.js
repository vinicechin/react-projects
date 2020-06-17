import React, { PureComponent } from 'react'
import Person from './Person/Person'

// PureComponent is a Component with a shouldComponentUpdate check of all props and verify if any has changed
class Persons extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   // compare refs of person (is crating a new one on update) and passed methods
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   )
  // }

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