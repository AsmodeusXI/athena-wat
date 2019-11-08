import React, { useEffect } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import Input from "./Input";
import { putUser, postUser } from "./api/userApi";

// ANY function at the root of a File with React imported is
// a React component!
function ManageUser(props) {
  const { users, addUser, editUser } = props;
  // Hooks always start with the word "use" and can only be called in a React component.
  // Contains info about the matching URL.
  const match = useRouteMatch();
  const { userId } = match.params; // using destructed aliasing

  const [user, setUser] = React.useState({
    name: "",
    email: ""
  });
  const [isSaved, setIsSaved] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);

  useEffect(() => {
    if (userId && users.length > 0) {
      const userToEdit = users.find(user => user.id === parseInt(userId, 10));
      userToEdit ? setUser(userToEdit) : setIsNotFound(true);
    }
  }, [userId, users]); // If userId OR users changes, we definitely want to re-render.

  async function handleSubmit(event) {
    event.preventDefault(); // Stop browser from posting back.
    userId ? editUser(await putUser(user)) : addUser(await postUser(user));
    setIsSaved(true);
  }

  // One way data flow: if you want to change state, do it yourself!
  function handleUserChange(event) {
    // The computer property syntax
    setUser({ ...user, [event.target.id]: event.target.value });
  }

  // Need EXPRESSIONS in a return.
  return (
    <>
      {/* Logical AND operator! If LHS is truthy, run RHS */}
      {/* Ternaries or external functions are also valid */}
      {isSaved && <Redirect to="/users" />}
      {isNotFound && <Redirect to="/notfound" />}
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          id="name"
          onChange={handleUserChange}
          value={user.name}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          onChange={handleUserChange}
          value={user.email}
        />
        {/* Don't use onClick for form submit because keyboard users won't click. */}
        <input type="submit" value={userId ? "Edit User" : "Add User"} />
      </form>
    </>
  );
}

ManageUser.propTypes = {
  users: PropTypes.array.isRequired,
  addUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired
};

export default ManageUser;
