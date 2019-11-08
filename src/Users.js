import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Users(props) {
  const { users, handleDelete } = props;
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
            {["ID", "Name", "Email", "Action"].map(header => (
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
                <button
                  aria-label={`Delete User ${user.name}`}
                  onClick={event => handleDelete(user.id)}
                >
                  Delete!
                </button>
                <Link to={`/user/${user.id}`}>
                  <button aria-label={`Edit User ${user.name}`}>
                    Edit!{" "}
                    <span aria-label="athena pencil" role="img">
                      ✏️
                    </span>
                  </button>
                </Link>
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
    </>
  );
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Users;
