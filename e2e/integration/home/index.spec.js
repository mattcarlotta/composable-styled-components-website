context("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays a link to open github", () => {
    cy.get("[data-testid='github-link']").should(
      "have.attr",
      "target",
      "_blank"
    );
  });

  it("displays a link to open styled-components", () => {
    cy.get("[data-testid='styled-components']").should(
      "have.attr",
      "target",
      "_blank"
    );
  });

  it("navigates to documentation when clicking on the documentation button", () => {
    cy.get("[data-testid='documentation-link']").click();
    cy.url().should("contain", "/documentation");
    cy.get("[data-testid='title']").should("have.text", "Documentation");
  });

  it("navigates to documentation when clicking on the header tab", () => {
    cy.get(`[data-testid='documentation-tab']`).click();
    cy.url().should("contain", "/documentation");
    cy.get("[data-testid='title']").should("have.text", "Documentation");
  });

  it("navigates to demonstrations when clicking on the header tab", () => {
    cy.get(`[data-testid='demonstrations-tab']`).click();
    cy.url().should("contain", "/demonstrations");
    cy.get("[data-testid='title']").should("have.text", "Demonstrations");
  });

  it("navigates to releases when clicking on the header tab", () => {
    cy.get(`[data-testid='releases-tab']`).click();
    cy.url().should("contain", "/releases");
    cy.get("[data-testid='title']").should("have.text", "Releases");
  });

  it("searches the website by query and navigates to option when clicked", () => {
    cy.get("[id='search-docs']").type("css");
    cy.get(".ds-suggestions").should("have.length", 1);
    cy.get("a.algolia-docsearch-suggestion").first().click();
    cy.url().should("contain", "/demonstrations");
    cy.hash().should("eq", "#css");
  });

  it("navigates back home when clicking on the logo tab", () => {
    cy.visit("/demonstrations");
    cy.get(`[data-testid='logo-tab']`).click();
    cy.url().should("contain", "/");
    cy.get("[data-testid='title']").should("have.text", "C(</>)mposable");
  });
});
