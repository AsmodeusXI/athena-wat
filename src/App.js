import React, { useState } from "react";

function App() {
  // STATE! If it renders, redraw the state!
  const [users, setUsers] = useState([
    { id: 1, name: "Sam", email: "s@l.com" },
    { id: 2, name: "Akito", email: "a@f.com" },
    { id: 3, name: "Hannah", email: "h@c.com" }
  ]);

  const h1Style = {
    color: "green",
    marginBottom: 20
  }; // JSX style objects (like CSS, but with Camel-Case in an object)

  function handleDelete(id) {
    // Update state so we know to re-render!
    setUsers(users.filter(user => user.id !== id));
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
      <label htmlFor="testinput">First Name</label>
      <input id="testinput"></input>
      <p style={h1Style}>These are the basics.</p>
    </>
  );
}

export default App;
