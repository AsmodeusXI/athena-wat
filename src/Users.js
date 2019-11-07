import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "./api/userApi";
import { Link } from "react-router-dom";

function Users() {
  // STATE! If it renders, redraw the state!
  const [users, setUsers] = useState([]);

  // useEffect - Used after the component is rendered (every time)
  // "runs by default after every render"
  // deps: a list of reasons that useEffect would run again
  //    runs once at the beginning, but no more if deps: []
  useEffect(() => {
    // any data that when it changes we want to rerun.
    getUsers().then(_users => setUsers(_users));
  }, []);

  const headers = ["ID", "Name", "Email", "Action"];

  function handleDelete(userId) {
    // Update state so we know to re-render!
    deleteUser(userId).then(() => {
      setUsers(users.filter(user => user.id !== userId));
    });
    // State doesn't update YET; it's queued.
    // setState batches state updates for performance reasons.
  }

  return (
    <>
      {/* JSX style objects (like CSS, but with Camel-Case in an object) */}
      <h1 style={{ size: "30em", color: "red" }}>Users</h1>
      <Link to="/user">
        <button className="button">Add User</button>
      </Link>
      <table className="table" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={event => handleDelete(user.id)}>
                  Delete!
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ul>
        {users.map(user => (
          <li key={user.id}>
            Delay execution via arrow func; THIS EXPLAINS SO MUCH!
            <button onClick={event => handleDelete(user.id)}>Delete!</button>
            {user.name} is a good human being!
          </li>
        ))}
        </ul> */}
      <label htmlFor="firstname">First Name</label>
      <input id="firstname"></input>
    </>
  );
}

export default Users;
