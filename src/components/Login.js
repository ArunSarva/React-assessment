import React, { Component } from 'react';
import { connect} from "react-redux";
import {LOGIN,CANCEL} from  '../Action/Redisteraction';
import browserHistory from "../util/browserHistory"
import {SIGN_UP} from  '../Action/Redisteraction';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
           Fname: '',
           Password:'',
           frequired:'',
           message:'',
           pre:''
        }
    }
    componentWillMount()
    {
        debugger;
        // this.props.SIGN_UP();
        // this.setState({message:"password requierd"})
    }
    handleChange=(event)=> {
        
        this.setState({[event.target.name]: event.target.value});
        // console.log(this.reqobj);
        }
        handleSubmit1=(event)=> {
            browserHistory.push("/signup");
        }
        handleSubmit=(event)=> {
            // window.location("/Task2");
            // browserHistory.push("/Task2");
            var password_regulr=/^[@#][A-Za-z0-9]{7,13}$/;
            if(this.state.Fname.length===0 && this.state.Password.length===0)
            {
                this.setState({frequired:"Fname required",pre:"password requierd"})

            }
            else if(this.state.Fname.length===0 )
            {
                this.setState({frequired:"Fname required"})
            }  
            
            else if (this.state.Password.length===0)
            {
                this.setState({pre:"password requierd"})
            }
            else if(password_regulr.test(this.state.Password) == false)
            {
                this.setState({pre:"password not valid"})
            }
            else
            {
                this.props.LOGIN();
            }
        }
    render() {
        return (
            <div>
                <div>
                    
                {/* <h1>{console.log(this.props.FirstName)}</h1> */}
                <h1>{console.log(this.props.Successmessage)}</h1>
                    <label>
                        {this.props.Successmessage}
                    </label>
                </div>
                <h2>Login</h2>
                <form >
                    <label>
                    First Name<br></br>
                    <input type="text" name="Fname" className="inputfiled" onChange={this.handleChange} /><br></br>
                    <label className="error_message">{this.state.frequired}</label><br></br>
                    Password<br></br>
                    <input type="email" name="Password" className="inputfiled" onChange={this.handleChange} /><br></br> 
                    <label className="error_message">{this.state.pre}</label>
                    </label><br></br>                                    
                </form>
                <button  className="Register" onClick={this.handleSubmit}> Login </button>
                <button  className="Cancel" onClick={this.handleSubmit1}> Register </button>
                
            </div>
        );
    }
}
const mapStateToprops=(state)=>{
    debugger
    const {FirstName}=state.Registerreducer;
    const {Password}=state.Registerreducer;
    const {Successmessage}=state.Registerreducer;
    
    return {FirstName,Password,Successmessage};
};
export default connect(
    mapStateToprops,
    {LOGIN}
    )( Login);
// export default Login;


