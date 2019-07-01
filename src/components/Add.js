import React, { useState } from 'react';
import './indexpage.css';

const Add = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form className="user_add_div"
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<h3>ADD USERS</h3>
			<label className="label"><b>Name</b></label><br></br>
			<input className="add_field"type="text" name="name" value={user.name} onChange={handleInputChange} /><br></br>
			<label className="label2"><b>Username</b></label><br></br>
			<input className="add_field" type="text" name="username" value={user.username} onChange={handleInputChange} /><br></br>
			<button className="Add_user">Add new user</button>
		</form>
	)
}

export default Add;