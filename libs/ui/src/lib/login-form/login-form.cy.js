/* eslint-disable no-undef */
import { LoginForm } from './login-form';

describe('LoginForm', () => {
  it('should mount', () => {
    cy.mount(<LoginForm />);
  });

  it('should have the correct placeholder text', () => {
    cy.mount(
      <div style={{ marginBlockStart: '1rem' }}>
        <LoginForm />
      </div>
    );
    cy.get(`[data-cy*=input-username]`)
      .invoke('attr', 'placeholder')
      .should('equal', 'Email Address / Username');
  });
});
