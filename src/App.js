import React from "react";
import Home from "./Home";
import Users from "./Users";
import Nav from "./Nav";
import ManageUser from "./ManageUser";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Route path="/" component={Home} exact />
      <Route path="/users" component={Users} />
      {/* Route placeholder that is optional; no need for repetition! */}
      <Route path="/user/:userId?" component={ManageUser} />
    </>
  );
}

export default App;
