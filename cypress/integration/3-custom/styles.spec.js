/// <reference types="cypress" />
import chaiColors from "chai-colors";
chai.use(chaiColors);
context("Custom", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("changes color on hover and focus", () => {
    cy.get('[cy-data="input-firstName"]').first().type("some text");

    cy.get("button")
      .first()
      .focus()
      .should("have.css", "background-color")
      .and("be.colored", "#00ffff");

    cy.get("button")
      .first()
      .trigger("mouseenter")
      .should("have.css", "background-color")
      .and("be.colored", "#00ffff");
  });
});
