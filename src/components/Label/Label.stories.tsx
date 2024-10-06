import React from 'react';
import Label from './Label';
import { LabelProps } from './Label.types';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: 'Components/Label',
    component: Label,
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
    htmlFor: 'input-id',
    children: 'Label Text',
};
