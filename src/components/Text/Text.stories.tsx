import React from 'react';
import Text from './Text';
import { TextProps } from './Text.types';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: 'Components/Text',
    component: Text,
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Sample Text',
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
    children: 'Styled Text',
    style: { color: 'blue', fontSize: '20px' },
};