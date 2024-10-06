import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
    test('renders card with title and content', () => {
        render(<Card title="Card Title" content="This is some content." />);
        expect(screen.getByText(/Card Title/i)).toBeInTheDocument();
        expect(screen.getByText(/This is some content./i)).toBeInTheDocument();
    });

    test('is visible', () => {
        const { container } = render(<Card title="Card Title" content="This is some content." />);
        expect(container.firstChild).toBeVisible();
    });
});
