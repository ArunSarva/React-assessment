import React, { Component } from 'react';
import { connect} from "react-redux";
import {LOGIN,CANCEL} from  '../Action/Redisteraction';
import browserHistory from "../util/browserHistory"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
           Fname: '',
           Password:'',
           frequired:'',
           pre:''
        }
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
        }
    render() {
        return (
            <div>
                <h2>Login</h2>
                <form >
                    <label>
                    First Name<br></br>
                    <input type="text" name="Fname" className="inputfiled" onChange={this.handleChange} /><br></br>
                    <label>{this.state.frequired}</label><br></br>
                    Password<br></br>
                    <input type="email" name="Password" className="inputfiled" onChange={this.handleChange} /><br></br> 
                    <label>{this.state.pre}</label>
                    </label><br></br>                                    
                </form>
                <button  className="Register" onClick={this.handleSubmit}> Login </button>
                <button  className="Cancel" onClick={this.handleSubmit1}> Register </button>
            </div>
        );
    }
}
// const mapStateToprops=(state)=>{
//     const {FirstName}=state.Registerreducer;
//     const {Password}=state.Registerreducer;
    
//     return {FirstName,Password};
// };
// export default connect(
//     mapStateToprops,
//     {LOGIN,CANCEL}
//     )( Login);
export default Login;