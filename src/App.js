import React, { Component } from 'react'
import { BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom'

import Project from './Project/Project'
import Exercise1 from './Exercises/Exercise1/Exercise1'
import Exercise2 from './Exercises/Exercise2/Exercise2'
import BasicFeatures from './Sections/BasicFeatures/BasicFeatures'
import StylingReact from './Sections/StylingReact/StylingReact'
import ErrorBoundaries from './Sections/ErrorBoundaries/ErrorBoundaries'
import AdvancedFeatures from './Sections/AdvancedFeatures/AdvancedFeatures'
import ReachingWeb from './Sections/ReachingWeb/ReachingWeb'
import Routing from './Sections/Routing/Routing'
import ReduxSection from './Sections/ReduxSection/ReduxSection'

import './App.css';

const exercises = [
  { component: <Exercise1 />,
    value: 1,
    title: "Exercise 1" },
  { component: <Exercise2 />,
    value: 2,
    title: "Exercise 2" }
]

const sections = [
  { component: <BasicFeatures />,
    value: 1,
    title: "Basic Features" },
  { component: <StylingReact />,
    value: 2,
    title: "Styling React" },
  { component: <ErrorBoundaries />,
    value: 3,
    title: "Error Boundaries" },
  { component: <AdvancedFeatures title="Advanced Features" />,
    value: 4,
    title: "Advanced Features" },
  { component: <ReachingWeb />,
    value: 5,
    title: "Reaching Web" },
  { component: <Routing />,
    value: 6,
    title: "Routing" },
  { component: <ReduxSection />,
    value: 7,
    title: "Redux" }
]

class App extends Component {
  changeExercise = (history, event) => {
    history.push("/exercises/" + event.target.value)
  }

  changeSection = (history, event) => {
    history.push("/sections/" + event.target.value)
  }

  //*********************** RENDERS ************************** */
  renderHeaderNav() {
    return (
      <header>
        <nav>
          <ul>
            <li><NavLink to={"/exercises"}>Exercises</NavLink></li>
            <li><NavLink to={"/sections"}>Sections</NavLink></li>
            <li><NavLink to={"/project"}>Project</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }

  renderExerciseSwitch({ history, match }) {
    return (
      <select name="exercises" id="ex-select" onChange={this.changeExercise.bind(this, history)} value={match.params.id}>
        {
          exercises.map((exercise) => {
            return <option key={exercise.value} value={exercise.value}>{exercise.title}</option>
          })
        }
      </select>
    )
  }
  
  renderSectionSwitch({ history, match }) {
    return (
      <select name="sections" id="sec-select" onChange={this.changeSection.bind(this, history)} value={match.params.id}>
        {
          sections.map((section) => {
            return <option key={section.value} value={section.value}>{section.title}</option>
          })
        }
      </select>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          { this.renderHeaderNav() }
          
          <Switch>
            {/** Exercises routes */}
            <Route path="/exercises" exact render={() => <Redirect to="/exercises/1" />} />
            <Route path="/exercises/:id" render={(props) => {
              return <>
                { this.renderExerciseSwitch(props) }
                <hr style={{width: '80%'}} />
                { exercises[props.match.params.id-1].component }
              </>
            }} />

            {/** Sections routes */}
            <Route path="/sections" exact render={() => <Redirect to="/sections/1" />} />
            <Route path="/sections/:id" render={(props) => {
              return <>
                { this.renderSectionSwitch(props) }
                <hr style={{width: '80%'}} />
                { sections[props.match.params.id-1].component }
              </>
            }} />

            {/** Project route */}
            <Route path="/project" exact>
              <hr style={{width: '80%'}} />
              <Project />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
