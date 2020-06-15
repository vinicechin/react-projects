import React, { Component } from 'react'
import Exercise1 from './Exercises/Exercise1/Exercise1'
import Exercise2 from './Exercises/Exercise2/Exercise2'
import BasicFeatures from './Sections/BasicFeatures/BasicFeatures'
import StylingReact from './Sections/StylingReact/StylingReact'

import './App.css';

class App extends Component {
  state = {
    section: "2",
    exercise: "2",
    isExercise: false
  }

  toggleContent = (event) => {
    this.setState({
      isExercise: !this.state.isExercise
    })
  }

  changeExercise = (event) => {
    this.setState({
      exercise: event.target.value
    })
  }

  changeSection = (event) => {
    this.setState({
      section: event.target.value
    })
  }

  // #################################### RENDER METHODS ###########################################

  renderExerciseSwitch() {
    return (
      <select name="exercises" id="ex-select" onChange={this.changeExercise} value={this.state.exercise}>
        <option value="1">Exercise 1</option>
        <option value="2">Exercise 2</option>
      </select>
    )
  }

  renderExercise(exercise) {
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

  renderSectionSwitch() {
    return (
      <select name="sections" id="sec-select" onChange={this.changeSection} value={this.state.section}>
        <option value="1">Basic Features</option>
        <option value="2">Styling React</option>
      </select>
    )
  }

  renderSection(section) {    
    switch(section) {
      case "1":
        return (
          <BasicFeatures />
        )
      case "2":
        return (
          <StylingReact />
        )
      default:
        return null
    }
  }

  // #################################### MAIN RENDER ###########################################

  render() {
    const buttomText = this.state.isExercise ? "Go to Classes" : "Go to Exercises"

    return (
      <div className="App">
        <button id="content-toggle" onClick={this.toggleContent}>{buttomText}</button>
        <br />
        {
          this.state.isExercise &&
          <div>
            { this.renderExerciseSwitch() }
            { this.renderExercise(this.state.exercise) }
          </div>
        }
        {
          !this.state.isExercise &&
          <div>
            { this.renderSectionSwitch() }
            { this.renderSection(this.state.section) }
          </div>
        }
      </div>
    );
  }
}

export default App;
