import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders Text component', () => {
    render(<Text>Test Text</Text>);
    const textElement = screen.getByText(/Test Text/i);
    expect(textElement).toBeVisible();
});
