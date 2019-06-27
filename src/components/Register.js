import React, { Component } from 'react';
import { connect} from "react-redux";
import {SIGN_UP} from  '../Action/Redisteraction';
class Register extends Component {
    render() {
        return (
            <div>
                <label className="label1">Register</label>
                <form >
                    <label>
                    First Name<br></br>
                    <input type="text" name="Fname" className="inputfiled" onChange={this.handleChange} /><br></br>
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
                <button  className="Cancel" onClick={this.handleSubmit}> Cancel </button>
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
    
    return {FirstName,SecondName,UserName,Password};
};
export default connect(
    mapStateToprops,
    {SIGN_UP}
    )( Register);
// export default Register;