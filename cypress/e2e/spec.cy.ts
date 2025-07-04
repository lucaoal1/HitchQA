describe("Testes da Página Inicial da Hitch Equity", () => {
  it("Deve acessar o site com sucesso", () => {
    cy.visit("https://hitchequity.com");
    cy.url().should("include", "hitchequity");
  });
});
