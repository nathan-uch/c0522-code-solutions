import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  { url: '../dist/images/link.webp' },
  { url: '../dist/images/zelda.webp' },
  { url: '../dist/images/urbosa.webp' },
  { url: '../dist/images/revali.webp' },
  { url: '../dist/images/daruk.webp' },
  { url: '../dist/images/mipha.webp' }
];

const carousel = <Carousel images={images} />;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(carousel);
