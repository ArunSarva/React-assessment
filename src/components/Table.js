import React from 'react';

const Table = props => (
  <table>
     <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    <tbody>
       {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button onClick={() => {props.editRow(user)}} className="btn1">Edit</button>
              <button onClick={() => props.deleteUser(user.id)} className="btn2">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td className="tb" colSpan={3}>No users</td><br></br>
        </tr>
      )}
    </tbody>
   
  </table>
)

export default Table;