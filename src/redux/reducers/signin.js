import * as actionTypes from "../actions/actionTypes";

const initialState = {
    userEmail: null,
    isAuthenticated: false,
    error: null,
    loading: false,
};

const signInStart = (state, action) => {
    return {
        ...state,
        loading: true,
        isAuthenticated: false,
        error: null
    };
};

const signInFail = (state, action) => {
    return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.err
    };
};

const signInSuccess = (state, action) => {
    return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
    };
};

const logout = (state, action) => {
    return {
        ...state,
        isAuthenticated: false,
        error: null,
        loading: false
    };
};

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNIN_START:
            return signInStart(state, action);
        case actionTypes.SIGNIN_SUCCESS:
            return signInSuccess(state, action);
        case actionTypes.SIGNIN_FAIL:
            return signInFail(state, action);
        case actionTypes.LOGOUT:
            return logout(state, action);
        default:
            return state;
    }
};

export default signInReducer;
