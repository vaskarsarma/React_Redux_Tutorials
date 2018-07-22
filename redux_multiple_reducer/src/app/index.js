// import React from "react";
// import {render} from "react-dom";

// import { User } from './components/User';
// import { Main } from './components/Main';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Max"
//         };
//     }

//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }

// render(<App />, window.document.getElementById('app'));

import { createStore, combineReducers } from 'redux';

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
    name:"Vaskar",
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

const store=createStore(combineReducers({mathReducer,userReducer}));

store.subscribe(()=>{
  console.log(store.getState())
});

store.dispatch({
    type:"ADD",
    payload: 10
});
store.dispatch({
    type:"ADD",
    payload:100
});
store.dispatch({
    type:"SUBSTRACT",
    payload:20
});
store.dispatch({
    type:"SET_NAME",
    payload:"Vaskar Sarma"
});
store.dispatch({
    type:"SET_AGE",
    payload:30
});