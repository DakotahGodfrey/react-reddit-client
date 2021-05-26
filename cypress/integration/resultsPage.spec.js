describe("results page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-testid=search]").type("value{enter}");
  });
  it("renders without error", () => {
    cy.url().should("include", "/results");
    cy.get("#App").should("exist");
  });
  it("should route the user to the chosen subreddit when the subreddit link is clicked", () => {
    cy.get(
      ":nth-child(1) > [data-testid=subreddit-link] > .results-subreddit-title"
    ).click();
    cy.url().should("include", "/subreddit");
  });
  it("should route the user to the chosen post when the post link is clicked", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(
      ":nth-child(1) > [data-testid=post-link] > [data-testid=results-title] > h3"
    ).click();
    cy.url().should("include", "/post");
    /* ==== End Cypress Studio ==== */
  });
});
