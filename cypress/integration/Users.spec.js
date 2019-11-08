context("Users", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/users");
  });

  // Write self-cleaning tests!
  it("should add and delete a user when delete is clicked", () => {
    cy.findByText("Add User").click();
    cy.findByLabelText("Name").type("Bob");
    cy.findByLabelText("Email").type("Bob@compulink.com{enter}");
    cy.findByLabelText("Delete User Bob").click();
  });
});
