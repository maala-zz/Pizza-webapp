import * as actionTypes from "../actions/actionTypes";

const initialState = {
    error: null,
    loading: false,
};

const signUpStart = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
};

const signUpFail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err
    };
};

const signUpSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        error: null,
    };
};

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_START:
            return signUpStart(state, action);
        case actionTypes.SIGNUP_SUCCESS:
            return signUpSuccess(state, action);
        case actionTypes.SIGNUP_FAIL:
            return signUpFail(state, action);
        default:
            return state;
    }
};

export default signUpReducer;
