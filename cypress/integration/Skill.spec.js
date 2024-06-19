describe("Skill E2E tests", () => {
  it("should display skills in the Skill section", () => {
    cy.visit("/");

    cy.get("a.navbar-link").contains("Skills").click();
    cy.url().should("include", "#skills");

    cy.get(".skill").within(() => {
      cy.get("h2").contains("skills");
      cy.get("owl-carousel").within(() => {
        cy.get(".item").should("have.length.at.least", 1);
      });
    });
  });
});
