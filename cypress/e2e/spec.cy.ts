import {} from "cypress";

describe("Specific elements", () => {
  it("should have a header, a footer and only one H1", () => {
    cy.visit("/");
    cy.get("header").should("be.visible");
    cy.get("h1").should("have.length", 1);
    cy.get("footer").should("be.visible");

    cy.visit("/ansoka");
    cy.get("header").should("be.visible");
    cy.get("h1").should("have.length", 1);
    cy.get("footer").should("be.visible");

    cy.visit("/bidra");
    cy.get("header").should("be.visible");
    cy.get("h1").should("have.length", 1);
    cy.get("footer").should("be.visible");

    cy.visit("/sponsorer");
    cy.get("header").should("be.visible");
    cy.get("h1").should("have.length", 1);
    cy.get("footer").should("be.visible");

    cy.visit("/om");
    cy.get("header").should("be.visible");
    cy.get("h1").should("have.length", 1);
    cy.get("footer").should("be.visible");
  });
});

describe("Functional navigation", () => {
  it("should be possible to navigate with menu", () => {
    cy.visit("/");
    cy.get("header").find("nav").find("a").first().click();
    cy.location("pathname").should("include", "ansoka");
  });
});
