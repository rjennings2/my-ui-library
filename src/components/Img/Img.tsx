import React from 'react';
import { ImgProps } from './Img.types';

const Img: React.FC<ImgProps> = ({ src, alt }) => {
    return <img src={src} alt={alt} />;
};

export default Img;
