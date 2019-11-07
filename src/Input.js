import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input
        id={props.id}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      ></input>
    </div>
  );
}

// Says what props this component should accept
// No compile-time checking, and only run in development!
//   Because there is a performance cost
// Does prevent from using TS or Flow
// Start by being super strict, THEN loosen up.
Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "number", "password"]),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
Input.defaultProps = {
  type: "text"
};

export default Input;
