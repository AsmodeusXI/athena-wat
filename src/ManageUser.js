import React from "react";
import { postUser } from "./api/userApi";
import { Redirect } from "react-router-dom";
import Input from "./Input";

// ANY function at the root of a File with React imported is
// a React component!
function ManageUser() {
  // Hooks always start with the word "use" and can only be called in a React component.

  const [user, setUser] = React.useState({
    name: "",
    email: ""
  });
  const [isSaved, setIsSaved] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault(); // Stop browser from posting back.
    const savedUser = await postUser(user);
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
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          id="name"
          type="text"
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
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default ManageUser;
