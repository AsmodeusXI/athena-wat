import React from "react";

function ManageUser() {
  // Hooks always start with the word "use" and can only be called in a React component.

  const [user, setUser] = React.useState({
    name: "",
    email: ""
  });

  function handleSubmit() {}

  return (
    <>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <br />
          <input id="name" type="text" value={user.name}></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <br />
          <input id="email" type="email" value={user.email}></input>
        </div>
        {/* Don't use onClick for form submit because keyboard users won't click. */}
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default ManageUser;
