beforeEach(() => {
  cy.visit("https://the-internet.herokuapp.com/checkboxes");
});

describe("Checkboxes can be selected and deselected", () => {
  it('All checkboxes are unchecked', () => {
    cy.get('[checked=""]').should("be.checked");
    cy.get('[checked=""]').uncheck();
    cy.get("#checkboxes > :nth-child(1)").should("not.be.checked");
    cy.get("#checkboxes > :nth-child(3)").should("not.be.checked");
  });
  it('All checkboxes are checked', () => {
    cy.get("#checkboxes > :nth-child(1)").check();
    cy.get("#checkboxes > :nth-child(1)").should("be.checked");
    cy.get("#checkboxes > :nth-child(3)").should("be.checked");
  });
});
