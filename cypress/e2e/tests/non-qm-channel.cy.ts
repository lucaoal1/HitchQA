import { APPLICATION_URL } from "../../support/constants";

describe("Non-QM Channel", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit(APPLICATION_URL);
  });
  it("Find carousel arrows, verify image transition", () => {
    const carouselSlideClasses = [
      "framer-ab0vt",
      "framer-1y3dsze",
      "framer-216dva",
      "framer-1ibx8pb",
    ];
    cy.get("div.framer-msu08v")
      .should("exist")
      .within(() => {
        const getTransformOrigins = () =>
          Cypress.Promise.all(
            carouselSlideClasses.map((className) =>
              cy.get(`div.${className}`).invoke("css", "transform-origin")
            )
          );
        getTransformOrigins().then((initialTransformOrigins) => {
          cy.get('button[aria-label="Previous"]')
            .should("have.length", 1)
            .should("be.visible")
            .click();

          cy.wait(500);

          getTransformOrigins().then((afterPreviousClickOrigins) => {
            const hasChangedAfterPrevious = initialTransformOrigins.some(
              (value, index) => value !== afterPreviousClickOrigins[index]
            );
            expect(hasChangedAfterPrevious).to.be.true;
          });

          cy.get('button[aria-label="Next"]')
            .should("have.length", 1)
            .should("be.visible")
            .click();

          cy.wait(500);

          getTransformOrigins().then((afterNextClickOrigins) => {
            const hasChangedAfterNext = initialTransformOrigins.some(
              (value, index) => value !== afterNextClickOrigins[index]
            );
            expect(hasChangedAfterNext).to.be.true;
          });
        });
      });
  });
});
