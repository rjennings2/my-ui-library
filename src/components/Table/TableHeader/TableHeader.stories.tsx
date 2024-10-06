import React from 'react';
import TableHeader from './TableHeader';
import { TableHeaderProps } from './TableHeader.types';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: 'Components/TableHeader',
    component: TableHeader,
} as Meta;

const Template: StoryFn<TableHeaderProps> = (args: TableHeaderProps) => <TableHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: [<th key="1">Header 1</th>, <th key="2">Header 2</th>],
};
