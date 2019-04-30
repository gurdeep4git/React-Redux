import * as actionTypes from "../actions";

const initialState = {
    results: []
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_COUNTER:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    val: action.payload.counter
                })
            };
        case actionTypes.DELETE_COUNTER:
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

export default resultReducer;
