import React from 'react';
import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

test('renders table cell', () => {
    render(<TableCell>Cell Content</TableCell>);
    expect(screen.getByText('Cell Content')).toBeVisible();
});
