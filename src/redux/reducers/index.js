import { combineReducers } from "redux";

import signInReducer from "./signin";

export default combineReducers({
    signIn: signInReducer
});
