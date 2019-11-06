import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "./api/userApi";

function App() {
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

  const h1Style = {
    color: "green",
    marginBottom: 20
  }; // JSX style objects (like CSS, but with Camel-Case in an object)

  function handleDelete(id) {
    // Update state so we know to re-render!
    deleteUser(id).then(() => {
      setUsers(users.filter(user => user.id !== id));
    });
    // State doesn't update YET; it's queued.
    // setState batches state updates for performance reasons.
  }

  return (
    <>
      <h1 className="header">Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {/* Delay execution via arrow func; THIS EXPLAINS SO MUCH! */}
            <button onClick={event => handleDelete(user.id)}>Delete!</button>
            {user.name} is a good human being!
          </li>
        ))}
      </ul>
      <label htmlFor="firstname">First Name</label>
      <input id="firstname"></input>
      <p style={h1Style}>These are the basics.</p>
    </>
  );
}

export default App;
