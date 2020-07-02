import React, { Component } from 'react'
import { BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom'

import Project from './Project/Project'
import Exercise1 from './Exercises/Exercise1/Exercise1'
import Exercise2 from './Exercises/Exercise2/Exercise2'
import Exercise3 from './Exercises/Exercise3/Exercise3'
import BasicFeatures from './Sections/BasicFeatures/BasicFeatures'
import StylingReact from './Sections/StylingReact/StylingReact'
import ErrorBoundaries from './Sections/ErrorBoundaries/ErrorBoundaries'
import AdvancedFeatures from './Sections/AdvancedFeatures/AdvancedFeatures'
import ReachingWeb from './Sections/ReachingWeb/ReachingWeb'
import Routing from './Sections/Routing/Routing'
import ReduxSection from './Sections/ReduxSection/ReduxSection'

import './App.css';

const EXERCISES = [
  { component: <Exercise1 />,
    value: 1,
    title: "Exercise 1" },
  { component: <Exercise2 />,
    value: 2,
    title: "Exercise 2" },
  { component: <Exercise3 />,
    value: 3,
    title: "Exercise 3" }
]

const SECTIONS = [
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

const NAVBAR = [
  { title: 'Exercises',
    path: '/exercises' },
  { title: 'Sections',
    path: '/sections' },
  { title: 'Project',
    path: '/project' }
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
      <header className="AppHeader">
        <nav>
          <ul className="AppNav">
            {
              NAVBAR.map((item) => {
                return (
                  <li className="AppNavItem" key={item.path}>
                    <NavLink className="AppNavLink" to={item.path}>
                      {item.title}
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </header>
    )
  }

  renderExerciseSwitch({ history, match }) {
    return (
      <select name="exercises" id="ex-select" onChange={this.changeExercise.bind(this, history)} value={match.params.id}>
        {
          EXERCISES.map((exercise) => {
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
          SECTIONS.map((section) => {
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
                { EXERCISES[props.match.params.id-1].component }
              </>
            }} />

            {/** Sections routes */}
            <Route path="/sections" exact render={() => <Redirect to="/sections/1" />} />
            <Route path="/sections/:id" render={(props) => {
              return <>
                { this.renderSectionSwitch(props) }
                <hr style={{width: '80%'}} />
                { SECTIONS[props.match.params.id-1].component }
              </>
            }} />

            {/** Project route */}
            <Route path="/project">
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
