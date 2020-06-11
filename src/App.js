import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Vini", age: 31, content: ""},
      {name: "Gabi", age: 25, content: "Fofa e linda"},
      {name: "Pingo", age: "todos", content: "Fofo e ticudo"}
    ],
    showPersons: false
  }

  switchNameButtonPressed = (newName) => {
    // this.state.persons[0].name = "Vinicius" -> DOESNT WORK

    let persons = this.state.persons
    persons[0].name = newName
    this.setState({
      persons
    })
  }

  nameChangedHandler = (event) => {
    let persons = this.state.persons
    persons[1].name = event.target.value
    this.setState({
      persons
    })
  }

  togglePersonsButtonPressed = () => {
    const showPersons = !this.state.showPersons
    this.setState({
      showPersons
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, i am a React App</h1>
        <button style={style} onClick={this.togglePersonsButtonPressed}>Toggle Persons</button>
        { this.state.showPersons &&
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameButtonPressed.bind(this, 'Vinicius Cechin')}>
                {this.state.persons[0].content}
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}>
                {this.state.persons[1].content}
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}>
                {this.state.persons[2].content}
            </Person>
          </div>
        }
      </div>
    );
  }
}

export default App;
