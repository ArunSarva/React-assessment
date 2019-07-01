import * as ActionTypes from '../Action/Types';
import browserHistory from "../util/browserHistory"
const initialstate ={
    FirstName:"",
    SecondName:"",
    UserName:"",
    Password:"",
    FMessage:'',
    Successmessage:'',
    Array:[]
};
export default(stateA=initialstate,action)=>
{
    switch(action.type)
    {
        case ActionTypes.SIGN_UP:
           {
            // this.setstate({Successmessage:"Login successful"});
                browserHistory.push("/login");
                // window.open("/login")
                return {...stateA,FirstName:action.value1,SecondName:action.value2,UserName:action.value3,Password:action.value4,Successmessage:"Login successful" }

            }
        case ActionTypes.LOGIN:
            {           browserHistory.push("/home");     
                return {...stateA,Successmessage:"Login successful"}
             }
         case ActionTypes.CANCEL:
            {
                return {...stateA,Password:"124"}
            }
           default:
               return stateA;
    }
}