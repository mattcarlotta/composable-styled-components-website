context("Documentation Page", () => {
  beforeEach(() => {
    cy.visit("/documentation");
  });

  it("displays the correct page", () => {
    cy.get("[data-testid='title']").should("have.text", "Documentation");
  });

  it("displays a link to open recompose", () => {
    cy.get("[data-testid='recompose']").should("have.attr", "target", "_blank");
  });

  it("focuses on the Installation anchor", () => {
    cy.get("[data-testid='installation-anchor']").click();
    cy.hash().should("eq", "#installation");
  });

  it("focuses on the Package Exports anchor", () => {
    cy.get("[data-testid='package-exports-anchor']").click();
    cy.hash().should("eq", "#package-exports");
  });

  it("navigates to the API when clicking on the 'API' link under 'Package Exports'", () => {
    cy.get("[data-testid='api-link']").click();
    cy.hash().should("eq", "#api");
  });

  it("focuses on the Getting Started anchor", () => {
    cy.get("[data-testid='getting-started-anchor']").click();
    cy.hash().should("eq", "#getting-started");
  });

  it("focuses on the API anchor", () => {
    cy.get("[data-testid='api-anchor']").click();
    cy.hash().should("eq", "#api");
  });

  it("navigates to the examples when clicking on the API links", () => {
    [
      "compose",
      "css",
      "extend",
      "nest",
      "setDisplayName",
      "withAttributes",
      "withDefaultProps",
      "withProps",
      "withPropTypes",
      "withStyles"
    ].forEach(id => {
      cy.get(`[data-testid='${id}-link']`).click();
      cy.url().should("contain", "/demonstrations");
      cy.hash().should("eq", `#${id}`);
      cy.go("back");
    });
  });

  it("displays a link to React Dev Tools in 'setDisplayName' API notes", () => {
    cy.get("[data-testid='react-dev-tools']").should(
      "have.attr",
      "target",
      "_blank"
    );
  });

  it("displays a link to styled-components attributes in 'withAttributes' API notes", () => {
    cy.get("[data-testid='styled-components-attrs']").should(
      "have.attr",
      "target",
      "_blank"
    );
  });

  it("displays a link to prop-types package in 'withPropTypes' API notes", () => {
    cy.get("[data-testid='prop-types']").should(
      "have.attr",
      "target",
      "_blank"
    );
  });

  it("navigates to the css demo in 'withStyles' API notes", () => {
    cy.get("[data-testid='css-demo-link']").click();
    cy.url().should("contain", "/demonstrations");
    cy.hash().should("eq", "#css");
  });
});
