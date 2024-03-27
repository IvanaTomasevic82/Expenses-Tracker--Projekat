/// <reference types="cypress" />

import testData from "../../fixtures/testData.json";

module.exports = {
  get mainHeaderLink() {
    return cy.get('a[class="navbar-brand"]');
  },

  get addNewExpenseLink() {
    return cy.get('a[class="nav nav-link"]');
  },

  get logOutButton() {
    return cy.get('button[type="submit"]');
  },

  assertElementsMainNavbar() {
    this.mainHeaderLink
      .should("be.visible")
      .and("have.text", testData.mainNavigationBar.mainHeaderLink);
    this.addNewExpense
      .should("be.visible")
      .and("have.text", testData.mainNavigationBar.addNewExpenseLink);
    this.logOutButton
      .should("be.visible")
      .and("have.text", testData.mainNavigationBar.logOut);
  },

  addNewExpense() {
    this.addNewExpenseLink.click();
  },

  logout() {
    this.logOutButton.click();
  },

  goBackToListPage() {
    this.mainHeaderLink.click();
  },
};
