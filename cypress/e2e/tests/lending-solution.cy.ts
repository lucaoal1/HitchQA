import { APPLICATION_URL } from "../../support/constants";

describe("Specialized Lending Solutions", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit(APPLICATION_URL);
  });

  it("Redirect Buttons", () => {
    cy.get("div.framer-fly5n2")
      .should("exist")
      .within(() => {
        let clicked = false;

        cy.get('div[data-framer-name="Variant 3"]')
          .should("have.length", 4)
          .each(($card) => {
            if (clicked) return;

            cy.wrap($card)
              .find("a")
              .should("have.length", 1)
              .and("be.visible")
              .then(($btn) => {
                const isDisabled = $btn.attr("aria-disabled") === "true";

                if (!isDisabled && !clicked) {
                  clicked = true;
                  cy.wrap($btn).as("activeButton");
                }
              });
          });

        cy.get("@activeButton").click();

        cy.url().should("include", "/heloc");
      });
  });
});
