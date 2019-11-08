import React, { useState, useEffect } from "react";
import Home from "./Home";
import Users from "./Users";
import Nav from "./Nav";
import ManageUser from "./ManageUser";
import { getUsers, deleteUser } from "./api/userApi";
import { Route } from "react-router-dom";

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

  function handleDelete(userId) {
    // Update state so we know to re-render!
    deleteUser(userId).then(() => {
      setUsers(users.filter(user => user.id !== userId));
    });
    // State doesn't update YET; it's queued.
    // setState batches state updates for performance reasons.
  }

  function submitUser(savedUser) {
    const reducedUsers = users.filter(user => user.id !== savedUser.id);
    setUsers([...reducedUsers, savedUser]);
  }

  return (
    <>
      <Nav />
      <Route path="/" component={Home} exact />
      <Route
        path="/users"
        render={reactRouterProps => {
          return <Users users={users} handleDelete={handleDelete} />;
        }}
      />
      {/* Route placeholder that is optional; no need for repetition! */}
      <Route
        path="/user/:userId?"
        render={reactRouterProps => {
          return <ManageUser users={users} submitUser={submitUser} />;
        }}
      />
    </>
  );
}

export default App;
