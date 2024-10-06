import React from 'react';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Option 1',
    value: '1',
    checked: false,
    onChange: () => {},
};

export const Checked = Template.bind({});
Checked.args = {
    label: 'Option 2',
    value: '2',
    checked: true,
    onChange: () => {},
};
