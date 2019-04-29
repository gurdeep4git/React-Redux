const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        // return {
        //     counter: state.counter + 1
        // };

        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1
            };

        case "ADD":
            return {
                ...state,
                counter: state.counter + action.payload.value
            };
        case "SUBSTRACT":
            return {
                ...state,
                counter: state.counter - action.payload.value
            };
        case "STORE_COUNTER":
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    val: state.counter
                })
            };
        case "DELETE_COUNTER":
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
