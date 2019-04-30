import * as actionType from "./actions.js";

const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        // return {
        //     counter: state.counter + 1
        // };

        case actionType.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };

        case actionType.ADD:
            return {
                ...state,
                counter: state.counter + action.payload.value
            };
        case actionType.SUBSTRACT:
            return {
                ...state,
                counter: state.counter - action.payload.value
            };
        case actionType.STORE_COUNTER:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    val: state.counter
                })
            };
        case actionType.DELETE_COUNTER:
            const updatedArr = state.results.filter(item => {
                return item.id !== action.payload.id;
            });
            return {
                ...state,
                results: updatedArr
            };
    }

    return state;
};

export default reducer;
