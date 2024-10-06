import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

describe('Img', () => {
    test('renders image with alt text', () => {
        render(<Img src="https://via.placeholder.com/150" alt="Placeholder" />);
        const image = screen.getByAltText(/Placeholder/i);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'https://via.placeholder.com/150');
    });

    test('is visible', () => {
        const { container } = render(<Img src="https://via.placeholder.com/150" alt="Placeholder" />);
        expect(container.firstChild).toBeVisible();
    });
});
