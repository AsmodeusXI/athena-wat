import { isValidEmail } from "./utils";

describe("utils", () => {
  // Writing sentences to describe expectations!
  // Naming tests well is important because tests are documentation!
  it("should return true when passed c@h.com", () => {
    const isValid = isValidEmail("c@h.com");

    // describe, expect, and it are ALL globals (which is frustrating for autocomplete)
    expect(isValid).toBe(true);
  });

  it("should return falue when passed when passed an empty string", () => {
    const isValid = isValidEmail("");

    expect(isValid).toBe(false);
  });
});
