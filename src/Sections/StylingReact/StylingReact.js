import React, { Component } from 'react'
import Person from '../SharedComponents/Persons/Person/Person'

import styles from './StylingReact.module.css'

class StylingReact extends Component {
  state = {
    persons: [
      {id: 'p0', name: "Vini", age: 31, content: ""},
      {id: 'p1', name: "Gabi", age: 25, content: "Fofa e linda"},
      {id: 'p2', name: "Pingo", age: "todos", content: "Fofo e ticudo"},
    ],
    showPersons: false
  }

  nameChangedHandler = (index, event) => {
    let persons = [...this.state.persons]
    persons[index].name = event.target.value
    this.setState({ persons })
  }

  togglePersonsButtonPressed = () => {
    const showPersons = !this.state.showPersons
    this.setState({
      showPersons
    })
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({persons})
  }

  render() {
    let btnClass = [styles.Button]
    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  click={this.deletePersonHandler.bind(this, index)}
                  changed={this.nameChangedHandler.bind(this, index)}
                  key={person.id}
                  name={person.name}
                  age={person.age}>
                    {person.content}
                </Person>
              )
            })
          }
        </div>
      )

      btnClass.push(styles.Red)
    }

    let classes = []
    if (this.state.persons.length <= 2) {
      classes.push(styles.red)
      if (this.state.persons.length <= 1) classes.push(styles.bold)
    }

    return (
      <div>
        <h1>Hi, i am a React App</h1>
        <p className={classes.join(' ')}>This should be styled dynamically</p>
        <button className={btnClass.join(' ')} onClick={this.togglePersonsButtonPressed}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default StylingReact;
