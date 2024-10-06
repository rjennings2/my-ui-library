import React from 'react';
import { DropdownProps } from './Dropdown.types';

const Dropdown: React.FC<DropdownProps> = ({ options, selected, onChange, disabled }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value); // Pass the selected value to the onChange prop
    };

    return (
        <select value={selected} onChange={handleChange} disabled={disabled}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
