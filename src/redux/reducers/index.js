import { combineReducers } from "redux";

import signInReducer from "./signin";
import signUpReducer from "./signup";

export default combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
});
