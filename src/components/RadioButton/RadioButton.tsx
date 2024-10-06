import React from 'react';
import { RadioButtonProps } from './RadioButton.types';

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, checked, onChange }) => {
    return (
        <label>
            <input type="radio" value={value} checked={checked} onChange={onChange} />
            {label}
        </label>
    );
};

export default RadioButton;
