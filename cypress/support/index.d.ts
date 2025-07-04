/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    realHover(): Chainable<Subject>;
    realClick(): Chainable<Subject>;
  }
}
