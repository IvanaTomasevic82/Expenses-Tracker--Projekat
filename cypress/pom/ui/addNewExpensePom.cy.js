/// <reference types="cypress" />

import testData from "../../fixtures/testData.json";

module.exports = {
  get listHeader() {
    return cy.get("h2");
  },

  get dateLabel() {
    return cy.get('label[for="date"]');
  },

  get dateInput() {
    return cy.get('input[id="date"]');
  },

  get dateRequiredValidation() {
    return cy.get("p").contains(testData.vslidationMessages.dateIsRequired);
  },

  get timeLabel() {
    return cy.get('label[for="time"]');
  },

  get timeInput() {
    return cy.get('input[id="time"]');
  },

  get descriptionLabel() {
    return cy.get('label[for="description"]');
  },

  get descriptionInput() {
    return cy.get('textarea[name="description"]');
  },

  get descriptionRequiredValidation() {
    return cy
      .get("p")
      .contains(testData.vslidationMessages.descriptionIsRequired);
  },

  get spentAmountLabel() {
    return cy.get('label[for="amount"]');
  },

  get spentAmountInput() {
    return cy.get('input[id="amount"]');
  },

  get amountRequiredValidation() {
    return cy.get("p").contains(testData.vslidationMessages.amountIsRequired);
  },

  get commentLabel() {
    return cy.get('label[for="comment"]');
  },

  get commentInput() {
    return cy.get('textarea[name="comment"]');
  },

  get submitButton() {
    return cy.get('button[class="btn btn-primary"]');
  },

  get backToListLink() {
    return cy.get('a[href="/"]');
  },

  assertElementsOnThePage() {
    this.listHeader
      .should("be.visible")
      .and("have.text", testData.addNewExpense.mainHeader);
    this.dateLabel
      .should("be.visible")
      .and("have.text", testData.addNewExpense.date);
    this.dateInput.should("be.visible");
    this.timeLabel
      .should("be.visible")
      .and("have.text", testData.addNewExpense.time);
    this.timeInput.should("be.visible");
    this.descriptionLabel
      .should("be.visible")
      .and("have.text", testData.addNewExpense.description);
    this.descriptionInput.should("be.visible");
    this.spentAmountLabel
      .should("be.visible")
      .and("have.text", testData.addNewExpense.spentAmount);
    this.spentAmountInput.should("be.visible");
    this.commentLabel
      .should("be.visible")
      .and("have.text", testData.addNewExpense.comment);
    this.commentInput.should("be.visible");
    this.submitButton.should("be.visible");
    this.backToListLink.should("be.visible");
  },

  addNewExpenseFlow(date, time, description, spentAmount, comment) {
    if (date) {
      this.dateInput.clear().type(date);
    }
    if (time) {
      this.timeInput.clear().type(time);
    }
    if (description) {
      this.descriptionInput.clear().type(description);
    }
    if (spentAmount) {
      this.spentAmountInput.click().type(spentAmount);
    }
    if (comment) {
      this.commentInput.clear().type(comment);
    }
    this.submitButton.click();
  },
};
