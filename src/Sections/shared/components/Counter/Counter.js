import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from './CounterControl/CounterControl'
import CounterOutput from './CounterOutput/CounterOutput'
import * as actions from '../../store/actions/actions'

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.increment} />
                <CounterControl label="Decrement" clicked={this.props.decrement}  />
                <CounterControl label="Add 5" clicked={this.props.add5}  />
                <CounterControl label="Subtract 5" clicked={this.props.sub5}  />
                <hr />
                <button onClick={() => this.props.saveResult(this.props.counter)} >Save Result</button>
                <ul>
                    {this.props.results.map((result) => {
                        return <li key={result.id} onClick={() => this.props.deleteResult(result.id)} >{result.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.control.counter,
        results: state.storage.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(actions.increment()),
        decrement: () => dispatch(actions.decrement()),
        add5: () => dispatch(actions.add(5)),
        sub5: () => dispatch(actions.sub(5)),
        saveResult: (value) => dispatch(actions.saveResult(value)),
        deleteResult: (id) => dispatch(actions.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);