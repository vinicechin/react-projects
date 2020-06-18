import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from './CounterControl/CounterControl'
import CounterOutput from './CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions'

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
        increment: () => dispatch({ type: actionTypes.INCREMENT }),
        decrement: () => dispatch({ type: actionTypes.DECREMENT }),
        add5: () => dispatch({ type: actionTypes.ADD, value: 5 }),
        sub5: () => dispatch({ type: actionTypes.SUB, value: 5 }),
        storeResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        deleteResult: (id) => dispatch({ type: actionTypes.DEL_RESULT, id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);