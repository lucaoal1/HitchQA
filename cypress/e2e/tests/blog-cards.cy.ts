import { APPLICATION_URL } from "../../support/constants";

describe("Blog Cards", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit(APPLICATION_URL);
  });

  it("Blog Card and checks URL changes", () => {
    cy.get('[data-framer-name="Blog-Card"]')
      .should("have.length", 3)
      .then(($cards) => {
        const cardCount = $cards.length;

        for (let i = 0; i < cardCount; i++) {
          cy.get('[data-framer-name="Blog-Card"]')
            .eq(i)
            .find('a[data-framer-name="Blog Card"]')
            .invoke("attr", "href")
            .then((href) => {
              cy.log(`Blog card ${i + 1} href: ${href}`);

              cy.get('[data-framer-name="Blog-Card"]')
                .eq(i)
                .find('a[data-framer-name="Blog Card"]')
                .click({ force: true });

              cy.location("pathname", { timeout: 5000 }).then((path) => {
                cy.log(`Current pathname: ${path}`);
                expect(path).not.to.eq("/");
                expect(path).to.include("/blogs/");
              });

              cy.visit("https://hitchequity.com");

              cy.wait(1000);
            });
        }
      });
  });
});
