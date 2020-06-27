import * as actionTypes from "../actions/actionTypes";

const initialState = {
    orders: [],
    error: null,
    loading: false,
};

const getUserOrdersStart = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
};

const getUserOrdersFail = (state, action) => {
    return {
        ...state,
        pizzaArray: null,
        loading: false,
        error: action.err
    };
};

const getUserOrdersSuccess = (state, action) => {
    return {
        ...state,
        orders: action.orders,
        loading: false,
        error: null,
    };
};

const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_ORDERS_START:
            return getUserOrdersStart(state, action);
        case actionTypes.GET_USER_ORDERS_START:
            return getUserOrdersSuccess(state, action);
        case actionTypes.GET_USER_ORDERS_FAIL:
            return getUserOrdersFail(state, action);
        default:
            return state;
    }
};

export default OrderReducer;
