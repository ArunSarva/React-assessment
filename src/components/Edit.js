import React, { useState, useEffect } from 'react';

const Edit = props => {
  const [ user, setUser ] = useState(props.currentUser)
 
  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form className="user_add_div"
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <h3>Edit USERS</h3>
      <label ><b>Name</b></label><br></br>
      <input  type="text" className="add_field" name="name" value={user.name} onChange={handleInputChange} /><br></br>
      <label><b>Username</b></label><br></br>
      <input type="text" className="add_field" name="username" value={user.username} onChange={handleInputChange} /><br></br>
      <button className="Add_user" >Update user</button>
      <button onClick={() => props.setEditing(false)} className="Cancel">Cancel</button>
    </form>
  )
}

export default Edit;