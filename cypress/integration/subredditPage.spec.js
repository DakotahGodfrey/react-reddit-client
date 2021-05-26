beforeEach(() => {
  cy.visit("/");
  cy.get(
    ":nth-child(1) > [data-testid=post-banner] > [data-testid=subreddit-link]"
  ).click();
});

describe("Subreddit page", () => {
  it("renders without error", () => {
    cy.url().should("include", "subreddit");
    cy.get("#App").should("exist");
  });
  it("loads more results when the load more button is clicked", () => {
    let initalFeed = 25;
    cy.get(".load-more").click();
    cy.findAllByTestId("user-post").should("have.length", initalFeed + 25);
  });
});
