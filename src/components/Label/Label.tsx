import React from 'react';
import { LabelProps } from './Label.types';

const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
    return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
