// import userData from '../../fixtures/example.json'
beforeEach(() => {
  cy.visit("https://qauto.forstudy.space", {
    auth: {
      username: "guest",
      password: "welcome2qauto",
    },
  });
});

describe("User account test", () => {
  it('User is being successfully signed in with "Garage" page opened', () => {
    cy.fixture("credentials.json").then((userData) => {
      cy.contains("Sign In").click();
      cy.get("#signinEmail").type(userData.email);
      cy.get("#signinPassword").type(userData.password);
      cy.get(".modal-footer > .btn-primary").click();
      cy.get("h1").should("contain", "Garage");
    });
  });
});
