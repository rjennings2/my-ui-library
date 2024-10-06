import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage', () => {
    test('renders hero image with background', () => {
        render(<HeroImage src="https://via.placeholder.com/800x400" alt="Hero" />);
        const heroDiv = screen.getByLabelText(/Hero/i);
        expect(heroDiv).toBeInTheDocument();
        expect(heroDiv).toHaveStyle(`background-image: url(https://via.placeholder.com/800x400)`);
    });

    test('is visible', () => {
        const { container } = render(<HeroImage src="https://via.placeholder.com/800x400" alt="Hero" />);
        expect(container.firstChild).toBeVisible();
    });
});
