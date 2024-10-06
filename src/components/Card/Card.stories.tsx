import React from 'react';
import Card from './Card';
import { CardProps } from './Card.types';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: 'Components/Card',
    component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Card Title',
    content: 'This is some content inside the card.',
};
