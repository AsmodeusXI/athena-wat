import React from "react";
import Input from "./Input";
import { render } from "@testing-library/react";

describe("Input", () => {
  it("should tie the label to the input via htmlFor", () => {
    // arrange
    // act
    // Destructure the render object.
    const { getByLabelText, getByDisplayValue } = render(
      <Input id="test" label="Test" onChange={() => {}} value="test" />
    );
    // assert that the label has a value of "Test"
    getByLabelText("Test");
    getByDisplayValue("test");
  });
});
