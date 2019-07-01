import * as ActionTypes from './Types';

export function SIGN_UP(fname,sname,uname,pass){
    return function(dispatch){
        debugger;console.log(fname,sname,uname,pass)
        dispatch({
            
            type:'SIGN_UP',value1:fname,value2:sname,value3:uname,value4:pass
        });
    }
}
export function LOGIN(){
    return function(dispatch){
        dispatch({
            type:'LOGIN'
        });
    }
}
export function CANCEL(){
    return function(dispatch){
        dispatch({
            type:'CANCEL'
        });
    }
}