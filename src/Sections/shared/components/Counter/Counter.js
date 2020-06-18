import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from './CounterControl/CounterControl'
import CounterOutput from './CounterOutput/CounterOutput';

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
                <button onClick={this.props.storeResult} >Store Result</button>
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
        counter: state.counter,
        results: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        add5: () => dispatch({ type: 'ADD', value: 5 }),
        sub5: () => dispatch({ type: 'SUB', value: 5 }),
        storeResult: () => dispatch({ type: 'STORE_RESULT' }),
        deleteResult: (id) => dispatch({ type: 'DEL_RESULT', id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);