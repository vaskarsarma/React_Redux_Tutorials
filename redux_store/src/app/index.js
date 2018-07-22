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

import { createStore } from 'redux';

const initialStste={
    result:1,
    lastvalues:[]
};

const reducer=(state = initialStste, action)=>{
    switch (action.type){
        case "ADD":
         return state={
                ...state,
                result: state.result + action.payload,
                lastvalues: [...state.lastvalues, action.payload]
            };
        case "SUBSTRACT":
            return state={
                ...state,
                result:state.result - action.payload,
                lastvalues:[...state.lastvalues,action.payload]
            };
        default:
            return state;
    }
}

const store=createStore(reducer);

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
