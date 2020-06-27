import { combineReducers } from "redux";

import signInReducer from "./signin";
import signUpReducer from "./signup";
import PizzaReducer from "./pizza";
import CartReducer from "./cart";
import OrderReducer from "./order";

export default combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
    pizza: PizzaReducer,
    cart: CartReducer,
    order: OrderReducer
});
