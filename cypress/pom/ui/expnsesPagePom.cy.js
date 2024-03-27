/// <reference types="cypress" />

import testData from "../../fixtures/testData.json";

module.exports = {
  get listHeader() {
    return cy.get("h2");
  },

  get helloUserLabel() {
    return cy.get("h4");
  },

  get findByDateRangeLabel() {
    return cy.get("h6").contains(testData.expensesPage.findByDateRange);
  },

  get findByDateRangeInput() {
    return cy.get(".react-datepicker__input-container > input");
  },

  get datePickerModal() {
    return cy.get('div[class="react-datepicker__month-container"]');
  },

  get datePicker() {
    return cy.get('div[role="option"]');
  },

  get findByDescriptionOrCommentLabel() {
    return cy
      .get("h6")
      .contains(testData.expensesPage.findByDescriptionOrComment);
  },

  get findByDescriptionOrCommentInput() {
    return cy.get('input[id="word"]');
  },

  get currentlyNoExpensesLabel() {
    return cy.het["h4"].contains(testData.expensesPage.currentlyNoExpenses);
  },

  selectDate(startDay, endDay) {
    this.datePicker.contains(startDay).click();
    this.datePicker.contains(endDay).click();
  },
};
