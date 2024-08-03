describe("Banner E2E tests", () => {
  it("should display banner text and image", () => {
    cy.visit("/");

    //Check banner text
    cy.get("h1").contains("Hi! I'm Joe,");
    cy.get("span.tagline").contains("Welcome to Joe's Space");

    //check banner image
    cy.get("img[alt=Header Img]").should("be.visible");
  });

  it("should click on the Let's Connect button", () => {
    cy.visit("/");
    cy.get("button").contains("Let's Connect").click();
  });
});
