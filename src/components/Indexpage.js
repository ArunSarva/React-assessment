import React, { Component } from 'react';
import './indexpage.css';
import browserHistory from "../util/browserHistory"
import UniqueID from 'react-html-id';
class Indexpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            Name: '',
            UserName:'',
            arrary:[]
            // users:[
            //     {id:"", Name:'',UserName :''}]
        }
       
    }
    handleChange=(event)=> {
        
        this.setState({[event.target.name]: event.target.value});
        // console.log(this.reqobj);
        }
        
        handleSubmit=(event)=> {      
            UniqueID.enableUniqueIds(this);    
             let reqobj={
              id:this.nextUniqueId(),
              Name:this.state.Name,
              UserName:this.state.UserName,
            }
            let x=this.state.arrary.push(reqobj);
            this.setState({x});
            console.log(reqobj)

        }
        
        logOut()
        {
            browserHistory.push("/login");
        }
        deleteUser = (index, e) => {
            // debugger
            // console.log(this.nextUniqueId())
            const users = Object.assign([], this.state.arrary);
            users.splice(index, 1);
            this.setState({users:users});
            }

    render() {
        return (
            <div >
                <button  className="Logout" onClick={this.logOut}> Logout </button>
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
                    
                    {this.state.arrary.map((display,index) =>(
                    <tr>
                        <td>{display.Name}</td>
                        <td></td>
                        <td>{display.UserName}</td>
                        <td></td>
                        <td><button  onClick={this.h} >Edit</button><button onClick={this.deleteUser(this.state.Arrary,index)} >Delete</button></td>
                        </tr>
                        
                    ))}
                </table>
                </div>
            </div>
        );
    }
}

export default Indexpage;