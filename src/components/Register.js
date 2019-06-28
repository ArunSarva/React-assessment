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
    render() {
        return (
            <div>
                <label className="label1">Register</label>
                <form >
                    <label>
                    First Name<br></br>
                    <input type="text" name="Fname" className="inputfiled" onChange={this.handleChange} /><br></br>
                    <label>{this.props.FMessage}</label>
                    Last Name<br></br>
                    <input type="text" name="Sname" className="inputfiled" onChange={this.handleChange} />
                    <br></br>
                    User Name<br></br>
                    <input type="text" name="Uname"  className="inputfiled" onChange={this.handleChange} /><br></br>
                    Password<br></br>
                    <input type="text" name="Password" className="inputfiled" onChange={this.handleChange} />
                    </label><br></br>
                                    
                </form>
                <button  className="Register" onClick={this.props.SIGN_UP}> Register </button>
                <button  className="Cancel" onClick={()=>this.props.SIGN_UP(this.state.array1)}> Cancel </button>
                {/* <button onClick={()=>this.props.UpDateC(this.props.itema)}></button> */}
                {/* <hi>{this.props.SecondName}</hi>
                <hi>{this.props.FirstName}</hi>
                <hi>{this.props.Password}</hi>
                <hi>{this.props.UserName}</hi> */}
            </div>
        );
    }
}
const mapStateToprops=(state)=>{
    const {FirstName}=state.Registerreducer;
    const {SecondName}=state.Registerreducer;
    const {UserName}=state.Registerreducer;
    const {Password}=state.Registerreducer;
    const {Message}=state.Registerreducer;
    
    return {FirstName,SecondName,UserName,Password,Message};
};
export default connect(
    mapStateToprops,
    {SIGN_UP}
    )( Register);
