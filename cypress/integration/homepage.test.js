describe("Header test", () => {
  beforeEach(() => {
    cy.log("I run before every test in every spec file!");

    cy.visit("http://localhost:3000/").wait(5000);
  });

  it("Header test", () => {
    cy.contains("Register").click().wait(5000);
    cy.url().should("include", "http://localhost:3000/register");

    cy.contains("UPayments Store").click().wait(5000);
    cy.url().should("include", "http://localhost:3000");
  });
  it("Categories Test", () => {
    cy.contains("Categories").wait(2000).click();
    cy.contains("Electronic").wait(2000).click();
  });
});
