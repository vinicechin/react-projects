import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class Exercise1 extends Component {
    render() {
        return (
            <div>
                <UserInput />
                <UserOutput />
            </div>
        )
    }
}

export default Exercise1