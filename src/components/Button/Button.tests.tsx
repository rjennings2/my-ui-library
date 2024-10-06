import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders Button component', () => {
    render(<Button>Test Button</Button>);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeVisible();
});

test('renders Button in disabled state', () => {
    render(<Button disabled>Test Button</Button>);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeDisabled();
});
