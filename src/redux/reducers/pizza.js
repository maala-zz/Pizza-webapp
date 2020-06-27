import * as actionTypes from "../actions/actionTypes";

const initialState = {
    pizzaArray: null,
    error: null,
    loading: false,
};

const getAllPizzaStart = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
};

const getAllPizzaFail = (state, action) => {
    return {
        ...state,
        pizzaArray: null,
        loading: false,
        error: action.err
    };
};

const getAllPizzaSuccess = (state, action) => {
    return {
        ...state,
        pizzaArray: action.pizzaArray,
        loading: false,
        error: null,
    };
};

const PizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_PIZZA_START:
            return getAllPizzaStart(state, action);
        case actionTypes.GET_ALL_PIZZA_SUCCESS:
            return getAllPizzaSuccess(state, action);
        case actionTypes.GET_ALL_PIZZA_FAIL:
            return getAllPizzaFail(state, action);
        default:
            return state;
    }
};

export default PizzaReducer;
