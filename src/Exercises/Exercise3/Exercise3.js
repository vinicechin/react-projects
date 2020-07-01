import React, { Component } from 'react'
import { Switch, Route, withRouter, NavLink } from 'react-router-dom'

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
          <Route path={this.props.match.url + '/users'} component={ROUTES['users'].component} />
          <Route path={this.props.match.url + '/courses'} component={ROUTES['courses'].component} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(Exercise3)

/* <ol style={{textAlign: 'left'}}>
  +<li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
  +<li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
  +<li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
  <li>Pass the course ID to the "Course" page and output it there</li>
  <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
  <li>Load the "Course" component as a nested component of "Courses"</li>
  <li>Add a 404 error page and render it for any unknown routes</li>
  <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
</ol> */
