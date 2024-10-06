import React from 'react';
import { StyledButton } from './Styled';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ children, disabled, ...props }) => {
    return (
        <StyledButton disabled={disabled} {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;
