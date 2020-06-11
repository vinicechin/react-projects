import React, { Component } from 'react';
import InputValidator from './InputValidator/InputValidator'
import InputChar from './InputChar/InputChar'

class Exercise2 extends Component {
    state = {
        input: ''
    }

    changeInputHandler = (event) => {
        this.setState({ input: event.target.value })
    }

    deleteLetterHandler = (index) => {
        let inputArr = this.state.input.split('')
        inputArr.splice(index, 1)
        this.setState({
            input: inputArr.join('')
        })
    }

    render() {
        const length = this.state.input.length

        return (
            <div>
                <input type="text" value={this.state.input} onChange={this.changeInputHandler} />
                <p>{length}</p>
                <InputValidator length={length} />
                {
                    this.state.input.split('').map((letter, index) => {
                        return (
                            <InputChar
                                key={index}
                                letter={letter}
                                click={this.deleteLetterHandler.bind(this, index)}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Exercise2