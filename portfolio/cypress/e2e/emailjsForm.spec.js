describe('EmailJSForm', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the Newsletter component', () => {
    cy.contains('Subscribe to My Newsletter').should('be.visible');
  });

  it('displays error message for invalid email', () => {
    cy.get('input[placeholder="Email Address"]').type('invalidemail');
    cy.contains('Submit').click();
    cy.contains('Please enter a valid email address.').should('be.visible');
  });

  it('sends email with valid email address', () => {
    cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send', {
      statusCode: 200,
      body: { status: 200, text: 'OK' },
    }).as('sendEmail');

    cy.get('input[placeholder="Email Address"]').type('test@example.com');
    cy.contains('Submit').click();

    cy.wait('@sendEmail').its('response.statusCode').should('eq', 200);
    cy.contains('Message sent successfully').should('be.visible');
  });
});
