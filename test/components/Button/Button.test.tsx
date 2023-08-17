import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Button from '../../../src/components/Button/Button';

test('Renders correctly the label', () => {
  const button = render(<Button>{buttonLabel}</Button>);

  expect(button.getByText(buttonLabel)).toBeInTheDocument();
});

const buttonLabel = 'Test';
