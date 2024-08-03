describe("Project E2E test", () => {
  it("should display project cards in the Projects section", () => {
    cy.visit("/");
    cy.get("a.navbar-link").contains("projects").click();
    cy.url().should("include", "#projects");

    cy.get(".proj-imgbx").within(() => {
      cy.get("h4").should("have.length.at.least");
      cy.get("span").should("have.length.at.least");
    });
  });
});
