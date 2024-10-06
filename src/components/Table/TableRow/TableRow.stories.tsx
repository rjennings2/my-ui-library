import React from 'react';
import TableRow from './TableRow';
import { TableRowProps } from './TableRow.types';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: 'Components/TableRow',
    component: TableRow,
} as Meta;

const Template: StoryFn<TableRowProps> = (args: TableRowProps) => <TableRow {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: [<td key="1">Row 1, Cell 1</td>, <td key="2">Row 1, Cell 2</td>],
};
