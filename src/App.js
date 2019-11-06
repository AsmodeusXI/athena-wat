import React from "react";

function App() {
  const h1Style = {
    color: "green",
    marginBottom: 20
  }; // JSX style objects (like CSS, but with Camel-Case in an object)

  const users = [
    { id: 1, name: "Sam", email: "s@l.com" },
    { id: 2, name: "Akito", email: "a@f.com" },
    { id: 3, name: "Hannah", email: "h@c.com" }
  ];

  return (
    <>
      <h1 className="header">App</h1>
      <label htmlFor="testinput">First Name</label>
      <input id="testinput"></input>
      <p style={h1Style}>These are the basics.</p>
    </>
  );
}

export default App;
