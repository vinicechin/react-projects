import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Vini", age: 31, content: ""},
      {name: "Gabi", age: 25, content: "Fofa e linda"},
      {name: "Pingo", age: "todos", content: "Fofo e ticudo"}
    ]
  }

  switchNameButtonPressed = (newName) => {
    // this.state.persons[0].name = "Vinicius" -> DOESNT WORK

    let persons = this.state.persons
    persons[0].name = newName
    this.setState({
      persons
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, i am a React App</h1>
        <button onClick={() => this.switchNameButtonPressed('Vinicius')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameButtonPressed.bind(this, 'Vinicius Cechin')}>
            {this.state.persons[0].content}
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>
            {this.state.persons[1].content}
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}>
            {this.state.persons[2].content}
        </Person>
      </div>
    );
  }
}

export default App;
