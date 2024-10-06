import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

test('renders table header', () => {
    render(<TableHeader><th>Header</th></TableHeader>);
    expect(screen.getByText('Header')).toBeVisible();
});
