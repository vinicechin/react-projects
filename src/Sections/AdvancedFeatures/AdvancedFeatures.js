import React, { Component } from 'react'
import Persons from '../SharedComponents/Persons/Persons'
import Cockpit from '../SharedComponents/Cockpit/Cockpit'

class AdvancedFeatures extends Component {
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
    let persons = null
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
    }

    return (
      <div>
        <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsButtonPressed} />
        {persons}
      </div>
    );
  }
}

export default AdvancedFeatures;
