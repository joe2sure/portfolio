describe("Mailchimpform E2E test", () => {
  it("should fill and submit the Mailchimp form", () => {
    cy.visit("/");
    cy.get('input[placeholder="Email Address"]').type("test@example.com");
    cy.get("button").contains("Submit").click();

    //Check for success message or any other response
    cy.get(".alert").should("contain", " Thank you for Subscribing");
  });
});
