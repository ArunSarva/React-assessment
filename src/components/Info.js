import React, { useState, Fragment } from 'react';
import Add from './Add';
import Edit from './Edit';
import Table from './Table';
// import './Home1.css';
import browserHistory from '../util/browserHistory';
 
const Info = () => {
	const usersData = []
	const initialFormState = { id: null, name: '', username: '' }
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)
		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)
		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}
// 	handlePress = ()=>{
//         browserHistory.push('/Login')
//   }

	return (
		<div className="container">
        <div class="row">
        <div className=" page_title">
			<h2><b>React Application</b></h2>
        </div>
        <div className="Logout" >
			{/* <h4 className="heading2"><b>Logout</b></h4> */}
			<a href="Login"><b>Logout</b></a>
        </div>
        </div>
        <div>
        <div >
            {editing ? (
						<Fragment>
							
							<Edit	editing={editing}	setEditing={setEditing}	currentUser={currentUser}	updateUser={updateUser}/>
						</Fragment>
					  ) : (           
						<Fragment >              
							<Add addUser={addUser} />
						</Fragment>
             )}
        </div>
        <div className="user_display">
             <h3 className="heading5"><b>View users</b></h3>
				  	 <Table users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
        </div>
      </div>    
	)
}

export default Info;











