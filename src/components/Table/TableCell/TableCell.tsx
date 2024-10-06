import React from 'react';
import { TableCellProps } from './TableCell.types';

const TableCell: React.FC<TableCellProps> = ({ children }) => {
    return <td>{children}</td>;
};

export default TableCell;
