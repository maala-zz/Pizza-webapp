import * as ActionTypes from "./actionTypes";
import axios from "axios";
import { OrdersUrl } from "../../config/api-urls";

export const getUserOrdersStart = () => {
    return {
        type: ActionTypes.GET_USER_ORDERS_START
    };
};

export const getUserOrdersSuccess = orders => {
    return {
        type: ActionTypes.GET_USER_ORDERS_SUCCESS,
        orders: orders
    };
};

export const getUserOrdersFail = err => {
    return {
        type: ActionTypes.GET_USER_ORDERS_FAIL,
        err: err
    };
};


export const getUserOrders = () => {
    return dispatch => {
        dispatch(getUserOrdersStart());
        let token = localStorage.getItem("innoscriptaUserToken");
        return axios
            .get(OrdersUrl, {
                headers: {
                    'Authorization': `${token}`
                }
            })
            .then(response => {
                if (!response.data) {
                    dispatch(getUserOrdersFail("Failed, please try again"));
                } else {
                    console.log("getUserOrders response", response);
                    dispatch(getUserOrdersSuccess(response.data));
                }
            })
            .catch(err => {
                dispatch(getUserOrdersFail("Error: Failed"));
            });
    };
};