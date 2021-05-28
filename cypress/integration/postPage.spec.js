describe("post page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(":first-child > [data-testid=content-link]").click();
  });

  it("should render without error", () => {
    cy.url().should("include", "/post");
    cy.get("#App").should("exist");
  });
  // it("should render a card element with an testid of card-large", () => {
  //   cy.get("[data-testid=card-large]").should("exist");
  // });
  it("should route the user to the subreddit page when the subreddit link is clicked", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("[data-testid=subreddit-link]").click();
    cy.url().should("include", "/subreddit");
    /* ==== End Cypress Studio ==== */
  });
});
