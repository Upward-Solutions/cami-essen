import { render } from '@testing-library/react';
import Button from '../../../src/components/Button/Button';

describe('children prop', () => {
  test('Renders correctly the label', () => {
    const button = render(<Button>{buttonLabel}</Button>);

    expect(button.getByText(buttonLabel)).toBeInTheDocument();
  });
});

describe('variant prop', () => {
  test('Renders as primary button if a variant is not specified', () => {
    const button = render(<Button>{buttonLabel}</Button>);

    expect(button.container.firstChild).toHaveClass('btn-primary');
  });

  test('Render correct variants', () => {
    const primaryButton = render(
      <Button variant='primary'>{buttonLabel}</Button>
    );
    const secondaryButton = render(
      <Button variant='secondary'>{buttonLabel}</Button>
    );

    expect(primaryButton.container.firstChild).toHaveClass('btn-primary');
    expect(secondaryButton.container.firstChild).toHaveClass('btn-secondary');
  });
});

const buttonLabel = 'Test';
