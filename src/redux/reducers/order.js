import * as actionTypes from "../actions/actionTypes";

const initialState = {
    orders: [],
    error: null,
    loading: false,

    submittingOrderError: null,
    isSubmittingOrder: false,
    submittingOrderSuccess: false,
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

//#region submit order reducer
const submitOrderStart = (state, action) => {
    return {
        ...state,
        submittingOrderError: null,
        isSubmittingOrder: true,
        submittingOrderSuccess: false,
    };
};

const submitOrderFail = (state, action) => {
    return {
        ...state,
        submittingOrderError: action.err,
        isSubmittingOrder: false,
        submittingOrderSuccess: false
    };
};

const submitOrderSuccess = (state, action) => {
    return {
        ...state,
        submittingOrderError: null,
        isSubmittingOrder: false,
        submittingOrderSuccess: true
    };
};
//#endregion

const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_ORDERS_START:
            return getUserOrdersStart(state, action);
        case actionTypes.GET_USER_ORDERS_SUCCESS:
            return getUserOrdersSuccess(state, action);
        case actionTypes.GET_USER_ORDERS_FAIL:
            return getUserOrdersFail(state, action);

        //#region submit order reducer
        case actionTypes.SUBMIT_ORDER_START:
            return submitOrderStart(state, action);
        case actionTypes.SUBMIT_ORDER_SUCCESS:
            return submitOrderSuccess(state, action);
        case actionTypes.SUBMIT_ORDER_FAIL:
            return submitOrderFail(state, action);
        //#endregion

        default:
            return state;
    }
};

export default OrderReducer;
