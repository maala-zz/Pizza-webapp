import * as ActionTypes from "./actionTypes";

/*
pizza = {quantity: number, id: pizza id, price: pizza price, name: the name of the pizza}
*/
export const addPizzaToCart = pizza => {
    return {
        type: ActionTypes.ADD_PIZZA_TO_CART,
        pizza: pizza
    };
};


/*
pizza = {quantity: number, id: pizza id, price: pizza price, name: the name of the pizza}
*/
export const removePizzaToCart = pizza => {
    return {
        type: ActionTypes.REMOVE_PIZZA_FROM_CART,
        pizza: pizza
    };
};


/*
pizza = {quantity: number, id: pizza id, price: pizza price, name: the name of the pizza}
*/
export const updatePizzaOnCartIfExists = pizza => {
    return {
        type: ActionTypes.UPDATE_PIZZA_ON_CART_IF_EXISTS,
        pizza: pizza
    };
};

/*
pizza = {quantity: number, id: pizza id}
*/
export const updatePizzaOnCartQuantityIfExists = pizza => {
    return {
        type: ActionTypes.UPDATE_PIZZA_ON_CART_QUANTITY,
        pizza: pizza
    };
};


export const updateOrderSerialId = orderSerialId => {
    return {
        type: ActionTypes.UPDATE_ORDER_SERIAL_ID,
        orderSerialId: orderSerialId
    };
};

export const updateOrderName = orderName => {
    return {
        type: ActionTypes.UPDATE_ORDER_NAME,
        orderName: orderName
    };
};

export const updateOrderAddress = orderAddress => {
    return {
        type: ActionTypes.UPDATE_ORDER_ADDRESS,
        orderAddress: orderAddress
    };
};

export const updateOrderDeliveryCost = deliveryCost => {
    return {
        type: ActionTypes.UPDATE_ORDER_DELIVERY_COST,
        deliveryCost: deliveryCost
    };
};