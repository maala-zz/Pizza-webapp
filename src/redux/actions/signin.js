import * as ActionTypes from "./actionTypes";
import axios from "axios";
import { NotificationManager } from 'react-notifications';
import { SignInUrl } from "../../config/api-urls";

export const signInStart = () => {
    return {
        type: ActionTypes.SIGNIN_START
    };
};

export const signInSuccess = () => {
    return {
        type: ActionTypes.SIGNIN_SUCCESS
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
                NotificationManager.success('Logged in!', 'Successful!', 1000);
                localStorage.setItem("innoscriptaUserToken", "Bearer " + response.data.token);
                localStorage.setItem("innoscriptaUserEmail", userEmail);
                dispatch(signInSuccess());
                dispatch(checkSignInTimeout());

            })
            .catch(err => {
                NotificationManager.error('Please, check your email and password!', 'Error!', 3000);
                dispatch(signInFail("Error: Failed"));
            });
    };
};

export const checkAuthState = () => {
    return dispatch => {
        const token = localStorage.getItem("innoscriptaUserToken");
        if (token === null) {
            dispatch(logout());
        } else {
            dispatch(signInSuccess());
        }
    };
};