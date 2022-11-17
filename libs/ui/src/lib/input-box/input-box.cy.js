/* eslint-disable no-undef */
import { InputBox } from './input-box';

describe('InputBox', () => {
  it('should mount', () => {
    cy.mount(<InputBox placeholder="User Name" />);
  });

  it('should have the correct placeholder text', () => {
    const placeholder = 'User Name';

    cy.mount(<InputBox placeholder={placeholder} />);
    cy.get('input')
      .invoke('attr', 'placeholder')
      .should('contain', placeholder);
  });
});
