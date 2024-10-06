import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';
import { Option } from './Dropdown.types';

test('renders dropdown', () => {
    const options: Option[] = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
    ];
    render(<Dropdown options={options} selected="1" onChange={() => {}} />);
    expect(screen.getByRole('combobox')).toBeVisible();
});

test('disabled dropdown cannot be changed', () => {
    const options: Option[] = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
    ];
    render(<Dropdown options={options} selected="1" onChange={() => {}} disabled />);
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toBeDisabled();
});
