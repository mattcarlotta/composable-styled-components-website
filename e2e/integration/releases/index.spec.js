context("Releases Page", () => {
  beforeEach(() => {
    cy.visit("/releases");
  });

  it("displays the correct page", () => {
    cy.get("[data-testid='title']").should("have.text", "Releases");
  });
});
