import React from 'react';
import { HeroImageProps } from './HeroImage.types';

const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
    return <div style={{ backgroundImage: `url(${src})`, height: '400px', width: '100%', backgroundSize: 'cover' }} aria-label={alt}></div>;
};

export default HeroImage;
