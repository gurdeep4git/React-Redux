import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

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
                <button onClick={this.props.storeCounter}>Store Counter</button>
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
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: () => dispatch({ type: "INCREMENT" }),
        decrementCounter: () => dispatch({ type: "DECREMENT" }),
        addCounter: () => dispatch({ type: "ADD", payload: { value: 10 } }),
        substractCounter: () =>
            dispatch({ type: "SUBSTRACT", payload: { value: 10 } }),
        storeCounter: () => dispatch({ type: "STORE_COUNTER" }),
        deleteCounter: id =>
            dispatch({ type: "DELETE_COUNTER", payload: { id: id } })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
