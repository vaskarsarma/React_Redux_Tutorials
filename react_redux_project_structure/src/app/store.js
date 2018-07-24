import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import math from "./reducers/mathreducer";
import user from "./reducers/userreducer";

export default createStore (
    combineReducers(
        {
            math,
            user
        }
    ),
    {},
    applyMiddleware(logger)
);