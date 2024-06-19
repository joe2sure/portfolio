describe("Project E2E tests", () => {
  it("should display projects in the Projects section", () => {
    cy.visit("/");
    cy.get("a.navbar-link").contains("Projects").cick();
    cy.url().should("include", "#projects");

    cy.get(".project").within(() => {
      cy.get("h2").contains("Projects");
      cy.get(".proj-imgbx").should("have.length.at.least", 1);
    });
  });
});
