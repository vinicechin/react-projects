import React, { Component } from 'react'
import Person from '../shared/components/Persons/Person/Person'

class BasicFeatures extends Component {
  state = {
    persons: [
      {id: 'p0', name: "Vini", age: 31, content: ""},
      {id: 'p1', name: "Gabi", age: 25, content: "Fofa e linda"},
      {id: 'p2', name: "Pingo", age: 14, content: "Fofo e ticudo"},
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

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
    }

    return (
      <div>
        <h1>Hi, i am a React App</h1>
        <button style={style} onClick={this.togglePersonsButtonPressed}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default BasicFeatures;
