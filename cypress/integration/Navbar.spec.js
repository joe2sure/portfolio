describe("Navbar E2E Tests", () => {
  it("should navigate to different sections via Navbar links", () => {
    cy.visit("/");

    //Check Home link
    cy.get("a.navbar-link").contains("Home").click();
    cy.url().should("include", "#home");

    //Check Skills link
    cy.get("a.navbar-link").contains("Skills").click();
    cy.url().should("include", "#skills");

    //Check Projects link
    cy.get("a.navbar-link").contains("Projects").click();
    cy.url().should("include", "#projects");
  });
});
