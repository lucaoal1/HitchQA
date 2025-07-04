import { APPLICATION_URL } from "../../support/constants";

describe("Navbar Desktop", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit(APPLICATION_URL);
  });

  it("Show main navbar links", () => {
    cy.get("nav")
      .first()
      .within(() => {
        cy.contains("Products").should("be.visible");
        cy.contains("Contact").should("be.visible");
        cy.contains("Blogs").should("be.visible");
      });
  });

  it("'Products' over", () => {
    cy.get("nav").contains("Products").trigger("mouseover");

    cy.get("[data-framer-name='Product ']")
      .should("be.visible")
      .within(() => {
        cy.contains("HELOC").should("be.visible");
        cy.contains("HEI").should("be.visible");
        cy.contains("DSCR").should("be.visible");
      });
  });
  it("ink 'Blogs'", () => {
    cy.get("nav").contains("Blogs").click();

    cy.url().should("include", "https://hitchequity.com/blogs");

    cy.contains("Blog").should("be.visible");
  });
});
describe("Navbar - Mobile", () => {
  const mobileViewports = [
    { name: "Small Smartphone", width: 375, height: 667 },
    { name: "Large Smartphone", width: 414, height: 896 },
    { name: "Tablet", width: 768, height: 1024 },
  ];

  mobileViewports.forEach((viewport) => {
    context(
      `Viewport: ${viewport.name} (${viewport.width}x${viewport.height})`,
      () => {
        beforeEach(() => {
          cy.viewport(viewport.width, viewport.height);
          cy.visit(APPLICATION_URL);
          cy.get("[data-framer-name='HamBurger']").first().click();
        });

        it("Links", () => {
          cy.get(".framer-1irzppu").within(() => {
            cy.contains("Products").should("be.visible");
            cy.contains("Contact").should("be.visible");
            cy.contains("Blogs").should("be.visible");
          });
        });
        it("'Products' Submenu", () => {
          cy.get(".framer-1irzppu").contains("Products").click();
          cy.get("[data-framer-name*='Product']")
            .should("be.visible")
            .within(() => {
              cy.contains("HELOC").should("be.visible");
              cy.contains("HEI").should("be.visible");
              cy.contains("DSCR").should("be.visible");
            });
        });

        it("Blogs Page", () => {
          cy.get(".framer-1irzppu").contains("Blogs").click();
          cy.url().should("include", "https://hitchequity.com/blogs");
          cy.contains("Blog").should("be.visible");
        });
      }
    );
  });
});
