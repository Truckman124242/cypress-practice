beforeEach(() => {
  cy.visit("https://the-internet.herokuapp.com/dropdown");
});

describe("Dropdown values test", () => {
  it('Default "Please select an option" value is selected', () => {
    cy.get("select#dropdown option:selected").should(
      "have.text",
      "Please select an option"
    );
  });
  it('"Option 2" value is selected', () => {
    cy.get("select#dropdown").select("Option 2").click;
    cy.get("select#dropdown option:selected").should("have.text", "Option 2");
  });
});
