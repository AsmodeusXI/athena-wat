import React, { useEffect } from "react";
import { postUser, getUser, putUser } from "./api/userApi";
import { Redirect, useRouteMatch } from "react-router-dom";
import Input from "./Input";

// ANY function at the root of a File with React imported is
// a React component!
function ManageUser() {
  // Hooks always start with the word "use" and can only be called in a React component.
  // Contains info about the matching URL.
  const match = useRouteMatch();
  const { userId } = match.params; // using destructed aliasing

  const [user, setUser] = React.useState({
    name: "",
    email: ""
  });
  const [isSaved, setIsSaved] = React.useState(false);

  useEffect(() => {
    if (userId) {
      getUser(userId).then(existingUser => {
        setUser(existingUser);
      });
    }
  }, [userId]); // If userId changes, we definitely want to re-render.

  async function handleSubmit(event) {
    event.preventDefault(); // Stop browser from posting back.
    userId ? await putUser(user) : await postUser(user);
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
