import React from 'react';
import { TableHeaderProps } from './TableHeader.types';

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
    return <thead><tr>{children}</tr></thead>;
};

export default TableHeader;
