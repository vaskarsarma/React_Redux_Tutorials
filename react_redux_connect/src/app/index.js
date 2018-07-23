import React from "react";
import {render} from "react-dom";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import App from './containers/App';
import { Provider } from 'react-redux';

const mathReducer=(state = {
    results:0,
    lastvalues:[]
}, action)=>{
    switch (action.type){
        case "ADD":
         return state={
                ...state,
                results: state.results + action.payload,
                lastvalues: [...state.lastvalues, action.payload]
            };
        case "SUBSTRACT":
            return state={
                ...state,
                results:state.results - action.payload,
                lastvalues:[...state.lastvalues,action.payload]
            };
        default:
            return state;
    }
}

const userReducer=(state={
    name:"Vaskar Sarma",
    age:35
}, action)=>{
    switch(action.type){
        case "SET_NAME":
        return state={
                ...state,
                name:action.payload
        };
        case "SET_AGE":
        return state ={
            ...state,
            age:action.payload
        };
        default:
            return state;
    }
}

const store=createStore(
    combineReducers({math:mathReducer,user:userReducer}),
    {},
    applyMiddleware(logger)
);

store.subscribe(()=>{
  //console.log(store.getState())
});

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    window.document.getElementById('app')
);