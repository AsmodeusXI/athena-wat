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
      <Route path="/user" component={ManageUser} />
    </>
  );
}

export default App;
