import React from 'react';
import { TableFooterProps } from './TableFooter.types';

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
    return <tfoot><tr>{children}</tr></tfoot>;
};

export default TableFooter;
