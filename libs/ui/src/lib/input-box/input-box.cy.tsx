/* eslint-disable no-undef */
import { mount } from '@cypress/react18';
import { InputBox } from './input-box';
import { textBoxClasses, labelClasses } from './input-box.constants';

export type FormData = {
  userName: string;
  password: string;
  remember: boolean;
};

describe('InputBox', () => {
  let placeholder: string;
  let dataCy: string;
  // let control: Control<FormData, any>;
  beforeEach(() => {
    placeholder = 'User Name';
    dataCy = 'username';
  });

  it('should mount', () => {
    mount(<InputBox placeholder={placeholder} />);
  });

  it('should have the correct placeholder text', () => {
    mount(
      <div style={{ marginBlockStart: '2rem', paddingInline: '1rem' }}>
        <InputBox placeholder={placeholder} dataCy={dataCy} />
      </div>
    );
    cy.get(`[data-cy*=input-${dataCy}]`)
      .invoke('attr', 'placeholder')
      .should('contain', placeholder);
  });

  it('should have the correct css classes initially', () => {
    mount(
      <div style={{ marginBlockStart: '2rem', paddingInline: '1rem' }}>
        <InputBox placeholder={placeholder} dataCy={dataCy} />
      </div>
    );
    labelClasses
      .split(' ')
      .forEach((cssClass) =>
        cy.get(`[data-cy*=label-${dataCy}]`).should('have.class', cssClass)
      );

    textBoxClasses
      .split(' ')
      .forEach((cssClass) =>
        cy.get(`[data-cy*=input-${dataCy}]`).should('have.class', cssClass)
      );
  });

  it('should have an accessible label', () => {
    mount(
      <div style={{ marginBlockStart: '2rem', paddingInline: '1rem' }}>
        <InputBox placeholder={placeholder} dataCy={dataCy} />
      </div>
    );

    cy.get(`[data-cy*=input-${dataCy}]`).should('have.attr', 'id', dataCy);
    cy.get(`[data-cy*=label-${dataCy}]`).should('have.attr', 'for', dataCy);
  });

  it('should show the label inside the input box at font-size 16px when not focused and has no value', () => {
    mount(
      <div style={{ marginBlockStart: '2rem', paddingInline: '1rem' }}>
        <InputBox placeholder={placeholder} dataCy={dataCy} />
      </div>
    );

    cy.get(`[data-cy*=label-${dataCy}]`)
      .invoke('css', 'top')
      .should('equal', '8px');

    cy.get(`[data-cy*=label-${dataCy}]`)
      .invoke('css', 'color')
      .should('equal', 'rgb(156, 163, 175)');

    cy.get(`[data-cy*=label-${dataCy}]`)
      .invoke('css', 'font-size')
      .should('equal', '16px');
  });

  it('should show the label above the input box at font-size 14px when focused or has a value', () => {
    mount(
      <div style={{ marginBlockStart: '2rem', paddingInline: '1rem' }}>
        <InputBox placeholder={placeholder} dataCy={dataCy} />
      </div>
    );

    cy.get(`[data-cy*=input-${dataCy}]`).type('user@example.com');

    cy.get(`[data-cy*=label-${dataCy}]`)
      .invoke('css', 'top')
      .should('equal', '-22px');

    cy.get(`[data-cy*=label-${dataCy}]`)
      .invoke('css', 'color')
      .should('equal', 'rgb(75, 85, 99)');

    cy.get(`[data-cy*=label-${dataCy}]`)
      .invoke('css', 'font-size')
      .should('equal', '14px');
  });
});
