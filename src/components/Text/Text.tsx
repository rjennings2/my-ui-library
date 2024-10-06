import React from 'react';
import { TextProps } from './Text.types';

const Text: React.FC<TextProps> = ({ children, style }) => {
    return <p style={style}>{children}</p>;
};

export default Text;
