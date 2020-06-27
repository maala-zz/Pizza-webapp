import * as ActionTypes from "./actionTypes";
import axios from "axios";
import { SignInUrl } from "../../config/api-urls";

export const signInStart = () => {
    return {
        type: ActionTypes.SIGNIN_START
    };
};

export const signInSuccess = authData => {
    return {
        type: ActionTypes.SIGNIN_SUCCESS,
        authData: authData
    };
};

export const signInFail = err => {
    return {
        type: ActionTypes.SIGNIN_FAIL,
        err: err
    };
};

export const logout = () => {
    localStorage.removeItem("innoscriptaUserToken");
    localStorage.removeItem("innoscriptaUserEmail");
    return {
        type: ActionTypes.LOGOUT
    };
};

export const checkSignInTimeout = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, 60 * 60 * 1000 /* 1 hour */);
    };
};

export const signIn = (userEmail, password) => {
    return dispatch => {
        dispatch(signInStart());
        const signInData = { userEmail: userEmail, password: password };

        return axios
            .post(SignInUrl, signInData)
            .then(response => {
                if (!response.data) {
                    dispatch(signInFail("Failed, please try again"));
                } else {
                    console.log("signIn response", response);
                    localStorage.setItem("innoscriptaUserToken", "Bearer " + response.data.token);
                    localStorage.setItem("innoscriptaUserEmail", userEmail);
                    dispatch(signInSuccess(response.data));
                    dispatch(checkSignInTimeout());
                }
            })
            .catch(err => {
                dispatch(signInFail("Error: Failed"));
            });
    };
};

export const checkAuthState = () => {
    return dispatch => {
        const jsonAuthData = localStorage.getItem("signInData");
        const authData = JSON.parse(jsonAuthData);
        if (!jsonAuthData || authData.id === null) {
            dispatch(logout());
        } else {
            dispatch(signInSuccess(authData));
        }
    };
};