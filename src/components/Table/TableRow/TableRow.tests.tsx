import React from 'react';
import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

test('renders table row', () => {
    render(<TableRow><td>Row Content</td></TableRow>);
    expect(screen.getByText('Row Content')).toBeVisible();
});
