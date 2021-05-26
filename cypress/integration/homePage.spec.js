describe("home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should render without error", () => {
    cy.get("#App").should("exist");
  });
  it("should route the user to the subreddit page when a subreddit link is clicked", () => {
    cy.findAllByTestId("subreddit-link").should("exist");
    cy.get(
      ":nth-child(1) > [data-testid=post-banner] > [data-testid=subreddit-link]"
    ).click();
    cy.url().should("include", "subreddit");
  });
  it("should route the user to the home page when the logo is clicked", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(
      ":nth-child(1) > [data-testid=post-banner] > [data-testid=subreddit-link]"
    ).click();
    cy.get(".logo > img").click();
    cy.url().should("eq", "http://localhost:3000/");
    /* ==== End Cypress Studio ==== */
  });
  it("should route the user to the post page when a post link is clicked", () => {
    cy.get(
      ":nth-child(1) > [data-testid=content-link] > .post-content > img"
    ).click();
    cy.url().should("include", "post");
  });
  it("should load an initial 25 results", () => {
    cy.findAllByTestId("user-post").should("have.length", 25);
  });
  it("should load more results when the load more button is clicked", () => {
    /* ==== Generated with Cypress Studio ==== */
    let initalFeed = 25;
    cy.get(".load-more").click();
    cy.findAllByTestId("user-post").should("have.length", initalFeed + 25);
    /* ==== End Cypress Studio ==== */
  });
  it("should allow users to type in the search bar", () => {
    cy.get("[data-testid=search]").type("test");
    cy.get("[data-testid=search]").should("have.value", "test");
  });
  it("should route users to the results component when the search form is submitted with a value", () => {
    cy.get("[data-testid=search]").type("test{enter}");
    cy.url().should("include", "/results");
  });
  it("should display the settings modal when the settings button is clicked", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("[data-testid=settings-button").click();
    /* ==== End Cypress Studio ==== */
    cy.get("[role=dialog]").should("exist");
  });
  it("should remove the settings modal when the close button is clicked", () => {
    cy.get("[data-testid=settings-button").click();

    cy.get("[data-testid=modal-close]").click();
    cy.get("[role=dialog]").should("not.exist");
  });
  it("should route the user to the bookmarks component when the bookmarks link is clicked", () => {
    cy.get("[data-testid=bookmark-link]").click();
    cy.url().should("include", "/bookmarks");
  });
});
