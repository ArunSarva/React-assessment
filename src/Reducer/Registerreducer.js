import * as ActionTypes from '../Action/Types';
import browserHistory from "../util/browserHistory"
const initialstate ={
    FirstName:"",
    SecondName:"",
    UserName:"",
    Password:"",
    FMessage:'',
    Array:[]
};
export default(stateA=initialstate,action)=>
{
    switch(action.type)
    {
        case ActionTypes.SIGN_UP:
           {
            this.state.arrary.map((display) =>(
                {display}
            ))
            if(action.value.fname.length===0)
            {
                this.setState({})
                return {...stateA,FMessage:"Fname required"}

            }
            //    return {...stateA,FirstName:action.value.fname,SecondName:action.value.sname,UserName:action.value.uname,Password:action.value.password};
            else
            {return {...stateA,Password:"124"}}
        }
        case ActionTypes.LOGIN:
            {
                if(this.state.Fname.length===0 && this.state.Password.length===0)
            {
                this.setState({frequired:"Fname required",pre:"password requierd"})

            }
            else if(this.state.Fname.length===0 )
            {
                this.setState({frequired:"Fname required"})
                return true;
            }  
            
            else if (this.state.Password.length===0)
            {
                this.setState({pre:"password requierd"})
                return true;
            }
            else
            {
                browserHistory.push("/home");
            }
        
                
                return {...stateA,Password:"124"}
         }
         case ActionTypes.CANCEL:
            {
                return {...stateA,Password:"124"}
         }
           default:
               return stateA;
    }
}