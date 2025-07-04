import { APPLICATION_URL } from "../../support/constants";

describe("Hero", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit(APPLICATION_URL);
  });

  it("Show Title", () => {
    cy.contains(
      "h1",
      /Hitch: The Ultimate Point-of-Sale for Non-QM Mortgage Lending/i,
      { timeout: 10000 }
    ).should("be.visible");
  });

  it("Show Subtitle", () => {
    cy.contains("All in one Non-QM Platform", { timeout: 10000 }).should(
      "be.visible"
    );
  });

  it("Show 'Schedule Your Demo' Button", () => {
    cy.contains("a, button", /Schedule Your Demo/i, { timeout: 10000 })
      .should("be.visible")
      .click();
  });

  it("Show Hero Img", () => {
    cy.get("img, picture img")
      .first()
      .should("be.visible")
      .and(($img) => {
        const img = $img[0] as HTMLImageElement;
        expect(img.naturalWidth).to.be.greaterThan(0);
      });
  });
});
