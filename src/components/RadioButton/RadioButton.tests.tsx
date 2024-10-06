import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
    test('renders RadioButton with label', () => {
        render(<RadioButton label="Option 1" value="1" checked={false} onChange={() => {}} />);
        expect(screen.getByLabelText(/Option 1/i)).toBeInTheDocument();
    });

    test('is visible', () => {
        const { container } = render(<RadioButton label="Option 1" value="1" checked={false} onChange={() => {}} />);
        expect(container.firstChild).toBeVisible();
    });
});
