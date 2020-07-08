import React, { Component } from 'react'
import { Switch, Route, withRouter, NavLink, Redirect } from 'react-router-dom'

import Courses from './containers/Courses/Courses'
import Users from './containers/Users/Users'
import classes from './Exercise3.module.css'

const ROUTES = {
  users: {
    component: Users,
    path: '/users',
    title: 'Users'
  },
  courses: {
    component: Courses,
    path: '/courses',
    title: 'Courses'
  }
}

class Exercise3 extends Component {
  renderNavBar() {
    return (
      <header>
        <nav>
          <ul>
            {
              Object.keys(ROUTES)
                .map((route) => {
                  return (
                    <li key={route} >
                      <NavLink to={this.props.match.url + ROUTES[route].path}>
                        {ROUTES[route].title}
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

  render () {
    return (
      <div className={classes.Exercise3}>
        {this.renderNavBar()}
        <Switch>
          <Route path={`${this.props.match.url}/users`} component={ROUTES['users'].component} />
          <Route path={`${this.props.match.url}/courses`} component={ROUTES['courses'].component} />
          <Redirect from={`${this.props.match.url}/all-courses`} to={`${this.props.match.url}/courses`} />
          <Redirect from={`${this.props.match.url}`} exact to={`${this.props.match.url}/courses`} />
          <Route render={() => <p>404 - Page not Found</p>} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(Exercise3)
