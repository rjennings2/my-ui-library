import React from 'react';
import TableCell from './TableCell';
import { TableCellProps } from './TableCell.types';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: 'Components/TableCell',
    component: TableCell,
} as Meta;

const Template: StoryFn<TableCellProps> = (args: TableCellProps) => <TableCell {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Cell Content',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
    children: <strong>Custom Bold Content</strong>,
};