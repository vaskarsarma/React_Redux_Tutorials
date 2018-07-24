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

export default userReducer;