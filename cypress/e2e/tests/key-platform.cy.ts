import { APPLICATION_URL } from "../../support/constants";

describe("Key Platform", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit(APPLICATION_URL);
  });

  it("Shows title, subtitle, and features", () => {
    cy.get("div.framer-1dqjd9e").within(() => {
      cy.get("div.framer-1w6thkh")
        .should("be.visible")
        .and("contain.text", "Our Key Platform Features");

      cy.contains(
        "Explore our range of products, each crafted to meet a distinct set of lending requirements."
      ).should("exist");

      cy.get("div.framer-f7ti5n")
        .find('[data-framer-name="Cards"]')
        .should("have.length", 4)
        .each(($card) => {
          cy.wrap($card).should("be.visible");
        });
    });
  });
});
