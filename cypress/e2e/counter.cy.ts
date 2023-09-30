describe("Counter", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display the current count", () => {
    cy.get("#count").contains("0");
  });

  it("should increment the count when the increment button is clicked", () => {
    cy.get("#increment").click();
    cy.get("#count").contains("1");
  });

  it("should decrement the count when the decrement button is clicked", () => {
    cy.get("#decreament").click();
    cy.get("#count").contains("-1");
  });
});
