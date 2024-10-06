import React from 'react';
import TableFooter from './TableFooter';
import { TableFooterProps } from './TableFooter.types';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: 'Components/TableFooter',
    component: TableFooter,
} as Meta;

const Template: StoryFn<TableFooterProps> = (args: TableFooterProps) => <TableFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: [<td key="1">Footer Cell 1</td>, <td key="2">Footer Cell 2</td>],
};
