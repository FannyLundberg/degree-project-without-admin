import {} from "cypress";

describe("Login as admin", () => {
  it("should be possible to login right credentials", () => {
    cy.visit("/admin");
    cy.location("pathname").should("include", "admin");
    cy.dataCy("usernameAdmin").type("Fanny");
    cy.dataCy("usernamePassword").type("Fanny1224");
    cy.dataCy("loginSubmit").click();
    cy.location("pathname").should("include", "loggedIn");
  });

  it("should not be possible to login with wrong credentials", () => {
    cy.visit("/admin");
    cy.location("pathname").should("include", "admin");
    cy.dataCy("usernameAdmin").type("Fanny");
    cy.dataCy("usernamePassword").type("FelLösenord");
    cy.dataCy("loginSubmit").click();
    cy.location("pathname").should("not.include", "loggedIn");
  });
});

describe("Specific elements", () => {
  it("should have a header, a footer and only one H1", () => {
    cy.visit("/");
    cy.get("header").should("be.visible");
    cy.get("h1").should("have.length", 1);
    cy.get("footer").should("be.visible");

    cy.visit("/apply");
    cy.get("header").should("be.visible");
    cy.get("h1").should("have.length", 1);
    cy.get("footer").should("be.visible");

    cy.visit("/contribute");
    cy.get("header").should("be.visible");
    cy.get("h1").should("have.length", 1);
    cy.get("footer").should("be.visible");

    cy.visit("/sponsors");
    cy.get("header").should("be.visible");
    cy.get("h1").should("have.length", 1);
    cy.get("footer").should("be.visible");

    cy.visit("/about");
    cy.get("header").should("be.visible");
    cy.get("h1").should("have.length", 1);
    cy.get("footer").should("be.visible");
  });
});

describe("Functional navigation", () => {
  it("should be possible to navigate with menu", () => {
    cy.visit("/");
    cy.get("header").find("nav").find("a").first().click();
    cy.location("pathname").should("include", "apply");
  });
});
