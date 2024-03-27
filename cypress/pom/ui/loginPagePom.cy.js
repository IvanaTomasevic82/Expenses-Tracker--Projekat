/// <reference types="cypress" />

import testData from "../../fixtures/testData.json";

module.exports = {
  get mainHeader() {
    return cy.get("h2");
  },
  get loginLabel() {
    return cy.get("h3");
  },
  get emailLabel() {
    return cy.get('label[for="email"]');
  },
  get emailInput() {
    return cy.get('input[id="email"]');
  },
  get emailValidation() {
    return cy.get("p").contains(testData.vslidationMessages.emailRequired);
  },
  get passwordLabel() {
    return cy.get('label[for="password"]');
  },
  get passwordInput() {
    return cy.get('input[id="password"]');
  },
  get passwordValidation() {
    return cy.get("p").contains(testData.vslidationMessages.passwordRequired);
  },
  get submitButton() {
    return cy.get('button[type="submit"]');
  },

  assertPageElements() {
    this.mainHeader
      .should("be.visible")
      .and("have.text", testData.loginPage.mainHeader);
    this.loginLabel
      .should("be.visible")
      .and("have.text", testData.loginPage.loginLabel);
    this.emailLabel
      .should("be.visible")
      .and("have.text", testData.loginPage.emailLabel);
    this.passwordLabel
      .should("be.visible")
      .and("have.text", testData.loginPage.passwordLabel);
    this.submitButton
      .should("be.visible")
      .and("have.text", testData.submitButton);
  },

  enterInputData(email, password) {
    if (email) {
      this.emailInput.clear().type(email);
    }
    if (password) {
      this.passwordInput.clear().type(password);
    }
    this.submitButton.click();
  },
};
