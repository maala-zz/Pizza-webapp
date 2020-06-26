import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

const logger = store => {
    return next => {
            return action => {
//                console.log('[middleware] dispatching', action);
                const result = next(action);
//                console.log('[middleware] nest state', store.getState());
                return result;
            }
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));