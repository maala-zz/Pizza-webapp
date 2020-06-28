import axios from "axios";
import { NotificationManager } from 'react-notifications';
import * as ActionTypes from "./actionTypes";
import { signIn } from "../actions/signin";
import { SignUpUrl } from "../../config/api-urls";

export const signUpStart = () => {
    return {
        type: ActionTypes.SIGNUP_START
    };
};

export const signUpSuccess = authData => {
    return {
        type: ActionTypes.SIGNUP_SUCCESS,
        authData: authData
    };
};

export const signUpFail = err => {
    return {
        type: ActionTypes.SIGNUP_FAIL,
        err: err
    };
};

export const signUp = (userEmail, password, userName) => {
    return dispatch => {
        dispatch(signUpStart());
        const signUpData = {
            email: userEmail, password: password, name: userName, telephone: "", address: ""
        };

        return axios
            .post(SignUpUrl, signUpData)
            .then(response => {
                if (response.status == 208) {
                    dispatch(signUpFail("Failed, this email is already exist"));
                }
                console.log("signUp response", response);
                dispatch(signUpSuccess(response.data));
                dispatch(signIn(userEmail, password));
            })
            .catch(err => {
                dispatch(signUpFail("Error: Failed"));
                NotificationManager.error('An unknown error has occured, please try again and contact support if this issue persists!', 'Error!', 3000);
            });
    };
};