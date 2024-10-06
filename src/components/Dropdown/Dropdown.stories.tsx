import React from 'react';
import Dropdown from './Dropdown';
import { DropdownProps, Option } from './Dropdown.types';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ] as Option[], // Ensure to cast as Option[]
    selected: '1', // This should match the value of one of the options
    onChange: (value: string) => console.log(value),
};

export const Disabled = Template.bind({});
Disabled.args = {
    options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ] as Option[], // Ensure to cast as Option[]
    selected: '1',
    disabled: true,
};
