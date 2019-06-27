import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h2>Login</h2>
                <form >
                    <label>
                    First Name<br></br>
                    <input type="text" name="Fname" className="inputfiled" onChange={this.handleChange} /><br></br>
                    Password<br></br>
                    <input type="email" name="Password" className="inputfiled" onChange={this.handleChange} />
                    </label><br></br>                                    
                </form>
                <button  className="Register" onClick={this.handleSubmit}> Login </button>
                <button  className="Cancel" onClick={this.handleSubmit}> Register </button>
            </div>
        );
    }
}

export default Login;