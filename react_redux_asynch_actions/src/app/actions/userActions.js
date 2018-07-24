// const test = (name) =>new Promise(resolve => {
//     setTimeout(() => {
//         resolve(name);
//     }, 2000);
// });

export function setName(name){
    // return dispatch => {
    //     setTimeout(() => {
    //         dispatch({
    //             type:"SET_NAME",
    //             payload: name
    //     });
    //     }, 5000);
    // }

    return dispatch => {
      new Promise((resolve,reject) =>  setTimeout(() => {
            dispatch({
                type:"SET_NAME",
                payload: name
        });
        }, 5000));
    }

    // return {
    //     type: "SET_NAME",
    //     playload: test(name)
    // };
}

export function setAge(age){
    return{
        type:"SET_AGE",
        payload: age
    };
}