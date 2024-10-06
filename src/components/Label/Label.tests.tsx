import { render, screen } from '@testing-library/react';
import Label from './Label';

test('renders Label component', () => {
    render(<Label>Test Label</Label>);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeVisible();
});
