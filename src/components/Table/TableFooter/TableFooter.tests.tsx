import React from 'react';
import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';

test('renders table footer', () => {
    render(<TableFooter><tr><td>Footer Content</td></tr></TableFooter>);
    expect(screen.getByText('Footer Content')).toBeVisible();
});
