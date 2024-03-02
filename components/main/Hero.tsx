"use client";
import React from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
      <img
        src='/chmura1.png'
        alt='Background'
        className='absolute top-0 left-0 z-0 object-cover'
        style={{ 
            width: 'calc(100% - 20px)', // zmniejsza szerokość o 20px
            height: 'calc(100% - 10px)', // zmniejsza wysokość o 20px
            margin: '10px' // centruje obraz po zmniejszeniu
        }}
      />
      <HeroContent />
    </div>
  );
};

export default Hero;
