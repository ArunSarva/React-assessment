import * as ActionTypes from './Types';

export function SIGN_UP(item){
    return function(dispatch){
        dispatch({
            type:'SIGN_UP'
        });
    }
}