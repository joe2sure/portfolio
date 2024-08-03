describe("Footer E2E tests", () => {
  it("should display footer content and social icons", () => {
    cy.visit("/");
    cy.get("footer").within(() => {
      cy.get('img[alt="Logo"]').should("be.visible");
      cy.get(".social-icon a").should("have.length", 3);
      cy.get("p").contains("Joe's Copyright 2024. All Right Reserved");
    });
  });
});
