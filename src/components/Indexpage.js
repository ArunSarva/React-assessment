import React, { Component } from 'react';
import './indexpage.css';

class Indexpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            UserName:'',
            arrary:[]
        }
       
    }
    handleChange=(event)=> {
        
        this.setState({[event.target.name]: event.target.value});
        // console.log(this.reqobj);
        }
        handleSubmit=(event)=> {          
             let reqobj={
              Name:this.state.Name,
              UserName:this.state.UserName,
            }
            let x=this.state.arrary.push(reqobj);
            this.setState({x});
            console.log(reqobj)
            // window.location("/Task2");
            // browserHistory.push("/Task2");
            // if(this.state.age<=0)
            // {
            //     console.log("this is not a valid age")
            // }
            // var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            // if (reg.test(this.state.address) == false) 
            // {
            //     console.log('Invalid Email Address');                
            // }
            // if (this.state.city.length!=10)
            // {
            //     console.log("not a valid phone no parinitha")
            // }
        }

    render() {
        return (
            <div >
                <h1 className="page_title">React Application</h1>
                <div className="user_add_div">
                    <h2>Add User</h2>
                    <form >
                        <label>
                        Name:<br></br>
                        <input type="text" className="add_field" name="Name"  onChange={this.handleChange} /><br></br>
                        UserName:<br></br>
                        <input type="text" name="UserName" className="add_field" onChange={this.handleChange} /><br></br>
                        </label><br></br>                                    
                    </form>
                    <button className="Add_user" onClick={this.handleSubmit} >Add new User</button>   
                </div>
                <div className="user_display">
                <h2>View users</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th></th>
                        <th>UserName</th> 
                        <th></th>
                        <th>Action</th>
                        
                    </tr>
                    
                    {this.state.arrary.map((display) =>(
                    <tr>
                        <td>{display.Name}</td>
                        <td></td>
                        <td>{display.UserName}</td>
                        <td></td>
                        <td><button  onClick={this.h} >Submit</button><button onClick={this.ha} >Submit</button></td>
                        </tr>
                        
                    ))}
                </table>
                </div>
            </div>
        );
    }
}

export default Indexpage;