/// <reference types="cypress" />

import loginPage from "../../pom/ui/loginPagePom.cy";

describe("Login Page Test", () => {
  const validEmail = Cypress.env("email");
  const validPassword = Cypress.env("password");

  beforeEach("Visit login page", () => {
    cy.visit("");
  });
  it("Assert all login page elements", () => {
    loginPage.assertPageElements();
  });

  it("Log in sucessfully", () => {
    loginPage.enterInputData(validEmail, validPassword);
  });

  context("Email filed tests", () => {
    it("Empty login", () => {
      loginPage.enterInputData(false, validPassword);
      loginPage.emailValidation.should("be.visible");
    });
  });

  context("Password filed tests", () => {
    it("Empty password", () => {
      loginPage.enterInputData(validEmail, false);
      loginPage.passwordValidation.should("be.visible");
    });
  });
});
