import React, { Component } from 'react'
import Persons from '../SharedComponents/Persons/Persons'
import Cockpit from '../SharedComponents/Cockpit/Cockpit'

class AdvancedFeatures extends Component {

  // ############################## CONSTRUCTOR LIFECYCLE #####################################
  // if props are needed to set the initial state, do it here
  constructor(props) {
    super(props)
    console.log('[AdvancedFeatures] constructor')
  }

  // this new state declaration is added to the contructor lifecycle behind the scenes
  state = {
    persons: [
      {id: 'p0', name: "Vini", age: 31, content: ""},
      {id: 'p1', name: "Gabi", age: 25, content: "Fofa e linda"},
      {id: 'p2', name: "Pingo", age: 14, content: "Fofo e ticudo"},
    ],
    showPersons: false,
    changesCount: 0
  }

  // used to prepare the state before mounting the component, not used very often
  // static getDerivedStateFromProps(props, state) {
  //   return state
  // }

  // used to execute procedures that can generate side-effects, like http calls
  componentDidMount() {
    // console.log('[AdvancedFeatures] componentDidMount')
  }

  // ########################## LIFECYCLE FOR PROPS AND STATE CHANGE ###########################
  // used to decide if component should update. return boolean
  shouldComponentUpdate(nextProps, nextState) {
    return true
  }
  
  // last minute changes before update
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return { message: 'Snapshot works' }
  }

  // used to execute procedures after an update of the DOM
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('[AdvancedFeatures] componentDidUpdate')
    // console.log(snapshot)
  }

  // ############################### LIFECYCLE FOR CLEAN-UP #####################################
  componentWillUnmount() {
    //clean up stuff
  }

  // ################################## MAIN COMPONENT ##########################################

  nameChangedHandler = (index, event) => {
    let persons = [...this.state.persons]
    persons[index].name = event.target.value

    //Update state when depending on old state (setState is not sinc)
    this.setState((oldState, props) => {
      return {
        persons,
        changesCount: oldState.changesCount + 1
      }
    })
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
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsButtonPressed}
        />
        {persons}
      </div>
    );
  }
}

export default AdvancedFeatures;
