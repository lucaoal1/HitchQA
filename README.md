# Hitch E2E Tests

This project contains automated end-to-end (E2E) tests using Cypress to validate the functionality and interface of the Hitch website.

## 📋 Prerequisites

- Node.js v22.14.0
- npm

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/lucaoal1/HitchQA.git
cd hitch-e2e-tests
```

2. Install dependencies:

```bash
npm install
```

## 🧪 Running Tests

### Interactive Mode

To open the Cypress Test Runner:

```bash
npm run test
```

### Headless Mode

To run all tests in headless mode:

```bash
npm run test:headless
```

### Run Specific Tests

To run a specific test file:

```bash
npm run test -- --spec "cypress/e2e/tests/navbar.cy.ts"
```

## 📁 Project Structure

```
cypress/
├── e2e/
│   ├── spec.cy.ts
│   └── tests/
│       ├── arrow-images.cy.ts
│       ├── blog-cards.cy.ts
│       ├── cards.cy.ts
│       ├── carousel-logo.cy.ts
│       ├── hero.cy.ts
│       ├── key-platform.cy.ts
│       └── navbar.cy.ts
├── fixtures/
│   └── example.json
└── support/
    ├── commands.ts
    ├── constants.ts
    ├── e2e.ts
    └── index.d.ts
```

## 📝 Test Descriptions

- **navbar.cy.ts**: Navigation bar tests
- **hero.cy.ts**: Hero section tests
- **cards.cy.ts**: Card component tests
- **blog-cards.cy.ts**: Blog card tests
- **carousel-logo.cy.ts**: Logo carousel tests
- **key-platform.cy.ts**: Key platform section tests
- **arrow-images.cy.ts**: Arrow images tests

## Test Report

### Tool Used

- Cypress

### Website Tested

- https://hitchequity.com

### Date

- 07/03/2025

### Responsible

- Lucas Roberto

### Objective

Execute end-to-end (E2E) tests on the Hitch Equity platform to validate the structure and functionality of the page elements, identify potential improvements, and assess the feasibility of automating relevant QA scenarios.

### General Observations

#### 1. Lack of Unique Identifiers

During testing, several elements (especially `div` blocks) lacked unique identifiers such as `id` or `data-testid`.

- Some elements use `data-framer-name`, but values are often repeated.
- This makes it difficult to write reliable selectors and increases test fragility.

**Suggestion:**  
Add unique and semantic identifiers to key interactive elements to improve automation and maintainability.

#### 2. Test Coverage Limitations

Some areas were not tested due to:

- **Non-interactive elements:** Sections without clicks, hovers, redirects, or forms were not prioritized.
- **Dynamic content (e.g., Blog):** Blog content changes frequently, making it impractical to assert static text values.
- **Repeated functionality:** Similar elements (e.g., buttons and links) were tested only once, as this is a skill demonstration project.

#### 3. Tests Performed

- **Navbar:** The “Platform” item was removed from the desktop menu but is still present in the mobile version.  
  → _Suggestion: Review consistency between responsive versions._

- **Main Cards:** Tests were kept in a single block for simplicity.  
  → _Note: In larger projects, tests should be modularized._

- **Static Sections:** Some non-interactive sections were still tested to demonstrate approach and logic.

- **Auto-generated classes:** Selectors based on generated classes were used when unique identifiers were not available, reducing test stability.

### Suggestions for Improving Testability

1. **Add semantic identifiers** (`id` or `data-testid`) to all key UI elements.
2. **Improve button semantics:** Visually differentiate non-clickable buttons (e.g., use disabled state or opacity).
3. **Ensure responsive consistency:** Match navigation and UI elements between desktop and mobile versions, or provide clear justification for differences.

### Limitations

- Not all user flows were tested.
- No tests involving backend operations (e.g., CRUD actions like adding or deleting clients) were executed.
- Tests may fail if layout or class names are changed.

### Conclusion

Despite the challenges, the test suite covers the main interactive elements effectively. By adopting development practices focused on testability, such as implementing unique identifiers, the Cypress test coverage can be further expanded and stabilized.
