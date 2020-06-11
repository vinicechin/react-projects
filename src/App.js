import React, { Component } from 'react';
import Exercise1 from './Exercises/Exercise1/Exercise1'
import Exercise2 from './Exercises/Exercise2/Exercise2'

import './App.css';

class App extends Component {
  isExercise = true

  state = {
    exercise: "2"
  }

  changeExercise = (event) => {
    this.setState({
      exercise: event.target.value
    })
  }

  renderSwitch(exercise) {
    switch(exercise) {
      case "1":
        return (
          <Exercise1 />
        )
      case "2":
        return (
          <Exercise2 />
        )
      default:
        return null
    }
  }

  renderClass() {
    return <div>class</div>
  }

  render() {
    return (
      <div className="App">
        {
          this.isExercise &&
          <select name="exercises" id="ex-select" onChange={this.changeExercise} value={this.state.exercise}>
            <option value="1">Exercise 1</option>
            <option value="2">Exercise 2</option>
          </select>
        }
        { this.isExercise && this.renderSwitch(this.state.exercise) }
        { !this.isExercise && this.renderClass() }
      </div>
    );
  }
}

export default App;
