/// <reference types="cypress" />

describe('Newsletter Component', () => {
  beforeEach(() => {
    cy.visit('/'); // Adjust this according to the route where Newsletter is rendered
  });

  it('renders the Newsletter component', () => {
    cy.get('input[placeholder="Email Address"]').should('exist');
    cy.get('button').contains('Submit').should('exist');
  });

  it('validates email and sends successfully', () => {
    cy.get('input[placeholder="Email Address"]').type('test@example.com');
    cy.get('button').contains('Submit').click();
    cy.get('div').contains('Sending...').should('exist');
  });

  it('displays error for invalid email', () => {
    cy.get('input[placeholder="Email Address"]').type('invalid-email');
    cy.get('button').contains('Submit').click();
    cy.get('div').contains('Please enter a valid email address.').should('exist');
  });
});
