import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import math from "./reducers/mathreducer";
import user from "./reducers/userreducer";
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

export default createStore (
    combineReducers(
        {
            math,
            user
        }
    ),
    {},
    applyMiddleware(logger, thunk, promise())
);