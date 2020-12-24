import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import Reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

let environment = process.env.NODE_ENV;

if (environment !== 'production' && typeof window !== "undefined") {
  middleware.push(createLogger());
}

let initialState = {};

if (typeof window !== 'undefined') {
    initialState = window.__initial_state__;
}


const store = createStore(Reducer, initialState, composeEnhancers(
    applyMiddleware(...middleware)
));

export default store;