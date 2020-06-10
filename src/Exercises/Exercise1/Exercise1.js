import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

import './Exercise1.css'

class Exercise1 extends Component {
    state = {
        userNames: ['defaultusername', 'defaultusername']
    }

    userNameChanged = (index, event) => {
        let userNames = this.state.userNames
        userNames[index] = event.target.value
        this.setState({
            userNames
        })
    }

    render() {
        return (
            <div>
                <div className="user-card">
                    <UserInput userName={this.state.userNames[0]} changed={this.userNameChanged.bind(this, 0)} />
                    <UserOutput userName={this.state.userNames[0]} />
                </div>
                <div className="user-card">
                    <UserInput userName={this.state.userNames[1]} changed={this.userNameChanged.bind(this, 1)} />
                    <UserOutput userName={this.state.userNames[1]} />
                </div>
            </div>
        )
    }
}

export default Exercise1