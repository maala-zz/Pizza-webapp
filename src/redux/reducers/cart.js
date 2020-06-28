import * as actionTypes from "../actions/actionTypes";

const initialState = {
    pizzaInCartArray: [],
    totalOrderCost: 0,
    orderSerialId: null,
    name: null,
    address: null,
    deliveryCost: 0
};

const addPizzaToCart = (state, action) => {

    if (action.pizza.quantity == "0") {
        let pizzaInCartArrayAfterDelete = state.pizzaInCartArray.filter(item => item.id !== action.pizza.id);
        return {
            ...state,
            pizzaInCartArray: pizzaInCartArrayAfterDelete,
            totalOrderCost: pizzaInCartArrayAfterDelete.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0)
        }
    }

    let exists = state.pizzaInCartArray.some(item => action.pizza.id === item.id);
    if (exists) {

        let pizzaInCartArrayAfterDelete = state.pizzaInCartArray.filter(item => item.id !== action.pizza.id);
        let pizzaInCartArrayAfterAdded = [...pizzaInCartArrayAfterDelete, action.pizza];
        ;
        return {
            ...state,
            pizzaInCartArray: pizzaInCartArrayAfterAdded,
            totalOrderCost: pizzaInCartArrayAfterAdded.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0)
        };
    }

    let newPizzaInCartArray = [...state.pizzaInCartArray, action.pizza];
    return {
        ...state,
        pizzaInCartArray: [...state.pizzaInCartArray, action.pizza],
        totalOrderCost: newPizzaInCartArray.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0)
    };

};

//unused
const removePizzaToCart = (state, action) => {
    return {
        ...state,
        pizzaInCartArray: []
    };
};

const updatePizzaOnCartIfExists = (state, action) => {

    if (action.pizza.quantity == "0") {
        let pizzaInCartArrayAfterDelete = state.pizzaInCartArray.filter(item => item.id !== action.pizza.id);
        return {
            ...state,
            pizzaInCartArray: pizzaInCartArrayAfterDelete,
            totalOrderCost: pizzaInCartArrayAfterDelete.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0)
        }
    }

    let exists = state.pizzaInCartArray.some(item => action.pizza.id === item.id);
    if (exists) {

        let pizzaInCartArrayAfterDelete = state.pizzaInCartArray.filter(item => item.id !== action.pizza.id);
        let pizzaInCartArrayAfterAdded = [...pizzaInCartArrayAfterDelete, action.pizza];

        return {
            ...state,
            pizzaInCartArray: pizzaInCartArrayAfterAdded,
            totalOrderCost: pizzaInCartArrayAfterAdded.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0)
        };
    }
    return state;
};

const updatePizzaOnCartQuantityIfExists = (state, action) => {

    if (action.pizza.quantity == "0") {
        let pizzaInCartArrayAfterDelete = state.pizzaInCartArray.filter(item => item.id !== action.pizza.id);
        return {
            ...state,
            pizzaInCartArray: pizzaInCartArrayAfterDelete,
            totalOrderCost: pizzaInCartArrayAfterDelete.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0)
        }
    }

    let exists = state.pizzaInCartArray.some(item => action.pizza.id === item.id);
    if (exists) {
        let objectToUpdate = state.pizzaInCartArray.filter(item => item.id === action.pizza.id)[0];
        let oldQuantity = objectToUpdate.quantity;
        Object.assign(objectToUpdate, { quantity: action.pizza.quantity });
        let difference = (action.pizza.quantity - oldQuantity) * objectToUpdate.price;
        return {
            ...state,
            totalOrderCost: state.totalOrderCost + difference
        }

    }
    return state;
};

const updateOrderSerialId = (state, action) => {
    return {
        ...state,
        orderSerialId: action.orderSerialId,
    };
};

const updateOrderName = (state, action) => {
    return {
        ...state,
        name: action.orderName,
    };
};

const updateOrderAddress = (state, action) => {
    return {
        ...state,
        address: action.orderAddress,
    };
};

const updateOrderDeliveryCost = (state, action) => {
    return {
        ...state,
        deliveryCost: action.deliveryCost,
    };
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PIZZA_TO_CART:
            return addPizzaToCart(state, action);
        case actionTypes.REMOVE_PIZZA_FROM_CART:
            return removePizzaToCart(state, action);
        case actionTypes.UPDATE_PIZZA_ON_CART_IF_EXISTS:
            return updatePizzaOnCartIfExists(state, action);
        case actionTypes.UPDATE_PIZZA_ON_CART_QUANTITY:
            return updatePizzaOnCartQuantityIfExists(state, action);
        case actionTypes.UPDATE_ORDER_SERIAL_ID:
            return updateOrderSerialId(state, action);
        case actionTypes.UPDATE_ORDER_NAME:
            return updateOrderName(state, action);
        case actionTypes.UPDATE_ORDER_ADDRESS:
            return updateOrderAddress(state, action);
        case actionTypes.UPDATE_ORDER_DELIVERY_COST:
            return updateOrderDeliveryCost(state, action);
        default:
            return state;
    }
};

export default CartReducer;
