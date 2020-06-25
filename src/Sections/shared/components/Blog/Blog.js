import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect, withRouter } from 'react-router-dom'

import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import './Blog.css';

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to={this.props.match.url + "/posts"} exact activeClassName="active" >Posts</NavLink></li>

                            {/* hash to jump to that part of the url */}
                            <li><NavLink to={{
                                // pathname: this.props.match.url + '/new-post', -> relative path example, doesnt work here because there is no props
                                pathname: this.props.match.url + "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>
                                New Post
                            </NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <Posts />} /> */}
                {/* switch -> route to first route found */}
                <Switch>
                    <Route path={this.props.match.url + "/posts"} component={Posts} />
                    { this.state.auth && <Route path={this.props.match.url + "/new-post"} component={NewPost} /> }
                    <Redirect from={this.props.match.url} to={this.props.match.url + "/posts"} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Blog);