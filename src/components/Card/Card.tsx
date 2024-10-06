import React from 'react';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default Card;
