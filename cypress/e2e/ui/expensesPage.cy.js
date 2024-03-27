/// <reference types="cypress" />

import loginPage from "../../pom/ui/loginPagePom.cy";
import expensesPage from "../../pom/ui/expnsesPagePom.cy";

describe("Login Page Test", () => {
  const validEmail = Cypress.env("email");
  const validPassword = Cypress.env("password");

  beforeEach("Visit login page", () => {
    cy.visit("");
    loginPage.enterInputData(validEmail, validPassword);
  });
  it("Assert all expenses page elements", () => {
    expensesPage.assertPageElements();
  });
});
