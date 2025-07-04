import { APPLICATION_URL } from "../../support/constants";

describe("Logos Carousel", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit(APPLICATION_URL);
  });

  it("Redirect active button", () => {
    cy.get("div.framer-1kcy16m")
      .should("exist")
      .scrollIntoView()
      .within(() => {
        cy.get("div.framer-us3haj")
          .should("contain.text", "Enrich your borrower experience")
          .and("be.visible");
        cy.get("div.framer-us3haj").should(
          "contain.text",
          "Streamline financial data access, employment verification, and credit checks"
        );

        cy.get("div.framer-1qboqr0")
          .should("exist")
          .and("be.visible")
          .within(() => {
            cy.get("img")
              .should("have.length.at.least", 3)
              .each(($logo) => {
                cy.wrap($logo).should("exist");
              });
          });
      });
  });
});
