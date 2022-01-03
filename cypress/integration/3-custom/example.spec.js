/// <reference types="cypress" />

context("Custom", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("cy.window() - get the global window object", () => {
    // https://on.cypress.io/window
    cy.window().should("have.property", "top");
  });

  it("cy.document() - get the document object", () => {
    // https://on.cypress.io/document
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });
  it("not submit without firstName", () => {
    cy.get('[cy-data="input-firstName"]').first().invoke("attr", "value", "");
    cy.get("button[type='submit']").should("have.attr", "disabled", "disabled");
    
  });
  it("submit with firstName", () => {
    cy.get('[cy-data="input-firstName"]')
      .first()
      .focus()
      .type('some text')
      .blur();
    cy.get("button[type='submit']").click();
  });
});
