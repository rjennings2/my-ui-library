import React from 'react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: 'Components/HeroImage',
    component: HeroImage,
} as Meta;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: 'https://via.placeholder.com/800x400',
    alt: 'Hero Image',
};
