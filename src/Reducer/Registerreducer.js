import * as ActionTypes from '../Action/Types';
const initialstate ={
    FirstName:"arun",
    SecondName:"kumar",
    UserName:"aru",
    Password:"123456"
};
export default(stateA=initialstate,action)=>
{
    
    switch(action.type)
    {
        case ActionTypes.SIGN_UP:
           {
            //    return {...stateA,FirstName:action.value.FirstName,SecondName:action.value.SecondName,UserName:action.value.UserName,Password:action.value.Password};
            return {...stateA,Password:"124"}}
           default:
               return stateA;
    }
}