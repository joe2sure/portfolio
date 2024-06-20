describe("Contact E2E tests", () => {
  it("should should fill and submit the form", () => {
    cy.visit("/");
    cy.get("a").contains("Let's Connect").click();
    cy.url().should("include", "#connect");

    cy.get('input[placeholder="first Name"]').type("Joe");
    cy.get("input[placeholder=Last Name]").type("john");
    cy.get('input[placeholder="Email Address"]').type("joe@example.com");
    cy.get('input[placeholder="Phone No"]').type("1234567890");
    cy.get('input=[placeholder="Message"]').type("This is a test message");

    cy.get("button").contains("Send").click();

    cy.get(".success").should("contain", "Message sent successfully");
  });
});
