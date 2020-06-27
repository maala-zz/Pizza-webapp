import { combineReducers } from "redux";

import signInReducer from "./signin";
import signUpReducer from "./signup";
import PizzaReducer from "./pizza";

export default combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
    pizza: PizzaReducer
});
