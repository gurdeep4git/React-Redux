import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import * as actionTypes from "../../store/actions";

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl
                    label="Increment"
                    clicked={this.props.incrementCounter}
                />
                <CounterControl
                    label="Decrement"
                    clicked={this.props.decrementCounter}
                />
                <CounterControl
                    label="Add 10"
                    clicked={this.props.addCounter}
                />
                <CounterControl
                    label="Subtract 10"
                    clicked={this.props.substractCounter}
                />
                <hr />
                <button onClick={() => this.props.storeCounter(this.props.ctr)}>
                    Store Counter
                </button>
                <ul>
                    {this.props.storedResults.map(elem => (
                        <li
                            onClick={() => this.props.deleteCounter(elem.id)}
                            key={elem.id}
                        >
                            {elem.val}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctrReducer.counter,
        storedResults: state.rsltReducer.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        decrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        addCounter: () =>
            dispatch({ type: actionTypes.ADD, payload: { value: 10 } }),
        substractCounter: () =>
            dispatch({ type: actionTypes.SUBSTRACT, payload: { value: 10 } }),
        storeCounter: counter =>
            dispatch({
                type: actionTypes.STORE_COUNTER,
                payload: { counter: counter }
            }),
        deleteCounter: id =>
            dispatch({ type: actionTypes.DELETE_COUNTER, payload: { id: id } })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
