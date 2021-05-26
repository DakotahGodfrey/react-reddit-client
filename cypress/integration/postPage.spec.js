beforeEach(() => {
  cy.visit("/");
  cy.get(
    ":nth-child(1) > [data-testid=content-link] > .post-content > img"
  ).click();
});

describe("post page", () => {
  it("should render without error", () => {
    cy.url().should("include", "/post");
    cy.get("#App").should("exist");
  });
  // it("should render a card element with an testid of card-large", () => {
  //   cy.get("[data-testid=card-large]").should("exist");
  // });
  it("should route the user to the subreddit page when the subreddit link is clicked", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("[data-testid=subreddit-link] > h2").click();
    cy.url().should("include", "/subreddit");
    /* ==== End Cypress Studio ==== */
  });
});
