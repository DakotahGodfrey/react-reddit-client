describe("Subreddit page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(
      ":nth-child(1) > [data-testid=post-banner] > [data-testid=subreddit-link]"
    ).click();
  });
  it("renders without error", () => {
    cy.url().should("include", "subreddit");
    cy.get("#App").should("exist");
  });
  it("should load an initial 25 results", () => {
    cy.findAllByTestId("user-post").should("have.length", 25);
  });
  it("loads more results when the load more button is clicked", () => {
    let initalFeed = 25;
    cy.get(".load-more").click();
    cy.findAllByTestId("user-post").should("have.length", initalFeed + 25);
  });
});
