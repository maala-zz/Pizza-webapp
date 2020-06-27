import * as ActionTypes from "./actionTypes";

export const addPizzaToCart = pizza => {
    return {
        type: ActionTypes.ADD_PIZZA_TO_CART,
        pizza: pizza
    };
};

export const removePizzaToCart = pizza => {
    return {
        type: ActionTypes.REMOVE_PIZZA_FROM_CART,
        pizza: pizza
    };
};

export const updatePizzaOnCartIfExists = pizza => {
    return {
        type: ActionTypes.UPDATE_PIZZA_ON_CART_IF_EXISTS,
        pizza: pizza
    };
};
