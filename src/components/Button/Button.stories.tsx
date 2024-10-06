import React from 'react';
import Button from './Button';
import { ButtonProps } from './Button.types';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Click Me',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Disabled',
    disabled: true,
};
