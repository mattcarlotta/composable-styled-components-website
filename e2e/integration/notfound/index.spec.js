context("Not Found Page", () => {
  beforeEach(() => {
    cy.visit("/notfound", { failOnStatusCode: false });
  });

  it("displays a 404 message", () => {
    cy.get("[data-testid='not-found-page']").should("have.length", 1);

    cy.get("[data-testid='status-code']").should("have.text", "404");
    cy.get("[data-testid='page-response']").should(
      "have.text",
      "Uh Oh! Page not found!"
    );
  });

  it("allows a user to navigate back to the home page", () => {
    cy.get("[data-testid='go-home']").click();

    cy.url().should("contain", "/");
  });
});
