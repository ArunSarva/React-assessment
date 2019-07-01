import React, { Component } from 'react';
import { connect} from "react-redux";
import {SIGN_UP} from  '../Action/Redisteraction';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Fname: '',
            Sname:'',
            Uname: '',
            Password:'',
            Fnamemessage:"",
            Snamemessage:"",
            Unamemessage:"",
            Passwordmessage:"",
            array1:[]
        }
    }
    handleChange=(event)=> {
        
        this.setState({[event.target.name]: event.target.value});
        // console.log(this.reqobj);
        let reqobj={
              fname:this.state.Fname,
              sname:this.state.Sname,
              uname:this.state.Uname,
              passowrd:this.state.Password
            }
            let x=this.state.array1.push(reqobj);
            this.setState({x});
            console.log(this.state.array1)
        }
        handleSubmit=(event)=> {
            // window.location("/Task2");
            // browserHistory.push("/Task2");
            var password_regulr=/^[@#][A-Za-z0-9]{7,13}$/;
            if(this.state.Fname.length===0 && this.state.Password.length===0&& this.state.Sname.length===0 && this.state.Uname.length===0)
            {
                this.setState({Fnamemessage:"First name required",Passwordmessage:"password requierd",Snamemessage:"Second  name required",Unamemessage:"User  name required"})

            }
            else if(this.state.Fname.length===0 )
            {
                this.setState({Fnamemessage:"First name required"})
                return true;
            } 
            else if(this.state.Sname.length===0 )
            {
                this.setState({Snamemessage:"Second  name required"})
                return true;
            }  
            else if(this.state.Uname.length===0 )
            {
                this.setState({Unamemessage:"User  name required"})
                return true;
            }   
            
            else if (this.state.Password.length===0)
            {
                this.setState({Passwordmessage:"password requierd"})
                return true;
            }
            else if(password_regulr.test(this.state.Password) == false)
            {
                this.setState({pre:"password not valid"})
            }
            else
            {
                this.props.SIGN_UP(this.state.Fname,this.state.Sname,this.state.Uname,this.state.Password);
            }
        }
    render() {
        return (
            <div>
                <label className="label1">Register</label>
                <form >
                    <label>
                    First Name<br></br>
                    <input type="text" name="Fname" className="inputfiled" onChange={this.handleChange} /><br></br>
                    <label className="error_message">{this.state.Fnamemessage}</label><br></br>
                    Last Name<br></br>
                    <input type="text" name="Sname" className="inputfiled" onChange={this.handleChange} /><br></br>
                    <label className="error_message">{this.state.Snamemessage}</label>
                    <br></br>
                    User Name<br></br>
                    <input type="text" name="Uname"  className="inputfiled" onChange={this.handleChange} /><br></br>
                    <label className="error_message">{this.state.Unamemessage}</label><br></br>
                    Password<br></br>
                    <input type="text" name="Password" className="inputfiled" onChange={this.handleChange} /><br></br>
                    <label className="error_message">{this.state.Passwordmessage}</label>
                    </label>
                                    
                </form>
                <button  className="Register" onClick={this.handleSubmit}> Register </button>
                <button  className="Cancel" onClick={()=>this.props.SIGN_UP(this.state.array1)}> Cancel </button>
                {/* <button onClick={()=>this.props.UpDateC(this.props.itema)}></button> */}
                {/* <hi>{this.props.SecondName}</hi>
                <hi>{this.props.FirstName}</hi>
                <hi>{this.props.Password}</hi> */}
                <hi>{this.props.Successmessage}</hi>
            </div>
        );
    }
}
const mapStateToprops=(state)=>{
    debugger;
    const {FirstName}=state.Registerreducer;
    const {SecondName}=state.Registerreducer;
    const {UserName}=state.Registerreducer;
    const {Password}=state.Registerreducer;
    const {Successmessage}=state.Registerreducer;
    
    return {FirstName,SecondName,UserName,Password,Successmessage};
};
export default connect(
    mapStateToprops,
    {SIGN_UP}
    )( Register);
