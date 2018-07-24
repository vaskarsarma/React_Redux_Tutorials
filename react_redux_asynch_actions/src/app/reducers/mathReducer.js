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

export default mathReducer;