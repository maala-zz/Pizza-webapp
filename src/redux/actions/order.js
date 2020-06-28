import * as ActionTypes from "./actionTypes";
import axios from "axios";
import { NotificationManager } from 'react-notifications';
import { OrdersUrl, SubmitOrderUrl } from "../../config/api-urls";

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

//#region submit order actions
export const submitOrderStart = () => {
    return {
        type: ActionTypes.SUBMIT_ORDER_START
    };
};

export const submitOrderSuccess = () => {
    return {
        type: ActionTypes.SUBMIT_ORDER_SUCCESS
    };
};

export const submitOrderFail = err => {
    return {
        type: ActionTypes.SUBMIT_ORDER_FAIL,
        err: err
    };
};

export const submitOrder = (order) => {
    return dispatch => {
        dispatch(submitOrderStart());
        let token = localStorage.getItem("innoscriptaUserToken");
        return axios
            .post(SubmitOrderUrl, order, {
                headers: {
                    'Authorization': `${token}`
                }
            })
            .then(response => {
                NotificationManager.success('You have submitted a new order!', 'Successful!', 2000);
                console.log("getUserOrders response", response);
                dispatch(submitOrderSuccess(response.data));
            })
            .catch(err => {
                NotificationManager.error('Error while submitting the order!', 'Error!', 2000);
                dispatch(submitOrderFail("Error: Failed"));
            });
    };
};

//#endregion