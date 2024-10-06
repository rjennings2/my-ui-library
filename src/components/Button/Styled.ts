import styled from 'styled-components';

export const StyledButton = styled.button<{ disabled?: boolean }>`
    background-color: ${({ disabled }) => (disabled ? 'grey' : 'blue')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;
    &:hover {
        background-color: ${({ disabled }) => (disabled ? 'grey' : 'darkblue')};
    }
`;
