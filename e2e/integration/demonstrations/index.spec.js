context("Demonstrations Page", () => {
  beforeEach(() => {
    cy.visit("/demonstrations");
  });

  it("displays the correct page", () => {
    cy.get("[data-testid='title']").should("have.text", "Demonstrations");
  });

  it("navigates to the API", () => {
    cy.get("[data-testid='api-link']").click();
    cy.url().should("contain", "/documentation");
    cy.hash().should("eq", "#api");
  });

  it("focuses on all demo anchors", () => {
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
      cy.get(`[data-testid='${id}-anchor']`).click();
      cy.hash().should("eq", `#${id}`);
      cy.go("back");
    });
  });

  it("displays all previews", () => {
    [
      "compose-pink-button",
      "css-default-button",
      "css-primary-button",
      "extend-default-button",
      "extend-submit-button",
      "nest-headline",
      "display-name-button",
      "attributes-username-input",
      "attributes-textbox-text",
      "attributes-textbox-password",
      "default-props-button",
      "default-props-override-button",
      "with-props-default-button",
      "with-props-noalert-button",
      "with-props-alert-button",
      "with-prop-types-button",
      "with-styles-default-button",
      "with-styles-disabled-button",
      "with-styles-default-primary-button",
      "with-styles-primary-button",
      "with-styles-default-secondary-button",
      "with-styles-secondary-danger-button"
    ].forEach(id => {
      cy.get(`[data-testid='${id}']`).first().should("have.length", 1);
    });
  });

  it("displays a link to open styled-components css documentation", () => {
    cy.get("[data-testid='styled-components-css']").should(
      "have.attr",
      "target",
      "_blank"
    );
  });

  it("navigates to withStyles demo when clicking on 'withStyles' link", () => {
    cy.get("[data-testid='withStyles-link']").click();
    cy.hash().should("eq", "#withStyles");
  });

  it("displays a link to open prop-types package", () => {
    cy.get("[data-testid='prop-types']").should(
      "have.attr",
      "target",
      "_blank"
    );
  });

  it("displays a link to open react-dev-tools documentation", () => {
    cy.get("[data-testid='react-dev-tools']").should(
      "have.attr",
      "target",
      "_blank"
    );
  });

  it("navigates to css demo when clicking on 'css' link", () => {
    cy.get("[data-testid='css-demo-link']").click();
    cy.hash().should("eq", "#css");
  });
});
