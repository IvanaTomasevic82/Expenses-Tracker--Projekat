/// <reference types="cypress" />

import loginPage from "../../pom/ui/loginPagePom.cy";
import addNewExpensePage from "../../pom/ui/addNewExpensePom.cy";
import testData from "../../fixtures/testData.json";

describe("Login Page Test", () => {
  const validEmail = Cypress.env("email");
  const validPassword = Cypress.env("password");
  const validDate = "2024-01-01";
  const validTime = "11:12:13";
  const validDescription = testData.randomDescription;
  const validSpentAmount = 12345;
  const validComment = testData.randomComment;
  let userId;

  beforeEach("Visit login page", () => {
    cy.intercept("POST", `${Cypress.config("apiUrl")}/login`).as("login");
    cy.visit("");
    loginPage.enterInputData(validEmail, validPassword);
    cy.wait("@login").then(({ response }) => {
      expect(response.body.user.email).to.eq(validEmail);
      expect(response.body.user.firstName).to.eq(Cypress.env("firstName"));
      expect(response.body.user.lastName).to.eq(Cypress.env("lastName"));
      expect(response.body.user.email).to.eq(Cypress.env("email"));
      userId = response.body.user.id;
    });
  });
  it("Assert all expenses page elements", () => {
    cy.visit("/expenses/add");
    addNewExpensePage.assertElementsOnThePage();
  });

  it("Add new expense", () => {
    cy.intercept("POST", `${Cypress.config("apiUrl")}/expenses`).as(
      "addNewExpense"
    );
    cy.visit("/expenses/add");
    addNewExpensePage.addNewExpenseFlow(
      validDate,
      validTime,
      validDescription,
      validSpentAmount,
      validComment
    );
    cy.wait("@addNewExpense").then(({ response }) => {
      expect(response.body.message).to.eq(
        testData.vslidationMessages.expenseCreatedSuccessfully
      );
    });
  });
  context("Negative tests", () => {
    beforeEach("Visit Add New Expense page", () => {
      cy.visit("/expenses/add");
    });
    it("All input fields empty", () => {
      addNewExpensePage.submitButton.click();
      addNewExpensePage.dateRequiredValidation.should("be.visible");
      addNewExpensePage.descriptionRequiredValidation.should("be.visible");
      addNewExpensePage.amountRequiredValidation.should("be.visible");
    });

    it("Empty date", () => {
      addNewExpensePage.addNewExpenseFlow(
        false,
        validTime,
        validDescription,
        validSpentAmount,
        validComment
      );
      addNewExpensePage.dateRequiredValidation.should("be.visible");
    });

    it("Empty time", () => {
      addNewExpensePage.addNewExpenseFlow(
        validDate,
        false,
        validDescription,
        validSpentAmount,
        validComment
      );
      // addNewExpensePage.dateRequiredValidation.should("be.visible");
    });

    it("Empty description", () => {
      addNewExpensePage.addNewExpenseFlow(
        validDate,
        validTime,
        false,
        validSpentAmount,
        validComment
      );
      addNewExpensePage.descriptionRequiredValidation.should("be.visible");
    });

    it("Empty spent amount", () => {
      addNewExpensePage.addNewExpenseFlow(
        validDate,
        validTime,
        validDescription,
        false,
        validComment
      );
      addNewExpensePage.amountRequiredValidation.should("be.visible");
    });
  });
});
