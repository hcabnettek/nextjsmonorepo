import { render } from '@testing-library/react';

import CreatePayment from './create-payment';

describe('CreatePayment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreatePayment />);
    expect(baseElement).toBeTruthy();
  });
});
