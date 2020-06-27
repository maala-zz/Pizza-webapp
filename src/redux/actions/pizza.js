import * as ActionTypes from "./actionTypes";
import axios from "axios";
import { PizzaUrl } from "../../config/api-urls";

export const getAllPizzaStart = () => {
    return {
        type: ActionTypes.GET_ALL_PIZZA_START
    };
};

export const getAllPizzaSuccess = pizzaArray => {
    return {
        type: ActionTypes.GET_ALL_PIZZA_SUCCESS,
        pizzaArray: pizzaArray
    };
};

export const getAllPizzaFail = err => {
    return {
        type: ActionTypes.GET_ALL_PIZZA_FAIL,
        err: err
    };
};


export const getAllPizza = () => {
    return dispatch => {
        dispatch(getAllPizzaStart());

        return axios
            .get(PizzaUrl)
            .then(response => {
                if (!response.data) {
                    dispatch(getAllPizzaFail("Failed, please try again"));
                } else {
                    console.log("getAllPizza response", response);
                    dispatch(getAllPizzaSuccess(response.data));
                }
            })
            .catch(err => {
                dispatch(getAllPizzaFail("Error: Failed"));
            });
    };
};