import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const activeStyle = {
    fontWeight: "bold",
    color: "#614476"
  };
  return (
    <nav className="navbar">
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      <NavLink to="/users" activeStyle={activeStyle}>
        Users
      </NavLink>
      <NavLink to="/user" activeStyle={activeStyle}>
        Manage User
      </NavLink>
    </nav>
  );
}

export default Nav;
