import * as actionTypes from "../actions/actionTypes";

const initialState = {
    pizzaInCartArray: []
};

const addPizzaToCart = (state, action) => {

    if (action.pizza.quantity == "0") {
        let pizzaInCartArrayAfterDelete = state.pizzaInCartArray.filter(item => item.id !== action.pizza.id);
        return {
            ...state,
            pizzaInCartArray: pizzaInCartArrayAfterDelete
        }
    }

    let exists = state.pizzaInCartArray.some(item => action.pizza.id === item.id);
    if (exists) {

        let pizzaInCartArrayAfterDelete = state.pizzaInCartArray.filter(item => item.id !== action.pizza.id);
        let pizzaInCartArrayAfterAdded = [...pizzaInCartArrayAfterDelete, action.pizza];

        return {
            ...state,
            pizzaInCartArray: pizzaInCartArrayAfterAdded
        };
    }

    return {
        ...state,
        pizzaInCartArray: [...state.pizzaInCartArray, action.pizza]
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
            pizzaInCartArray: pizzaInCartArrayAfterDelete
        }
    }

    let exists = state.pizzaInCartArray.some(item => action.pizza.id === item.id);
    if (exists) {

        let pizzaInCartArrayAfterDelete = state.pizzaInCartArray.filter(item => item.id !== action.pizza.id);
        let pizzaInCartArrayAfterAdded = [...pizzaInCartArrayAfterDelete, action.pizza];

        return {
            ...state,
            pizzaInCartArray: pizzaInCartArrayAfterAdded
        };
    }
    return state;
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PIZZA_TO_CART:
            return addPizzaToCart(state, action);
        case actionTypes.REMOVE_PIZZA_FROM_CART:
            return removePizzaToCart(state, action);
        case actionTypes.UPDATE_PIZZA_ON_CART_IF_EXISTS:
            return updatePizzaOnCartIfExists(state, action);
        default:
            return state;
    }
};

export default CartReducer;
