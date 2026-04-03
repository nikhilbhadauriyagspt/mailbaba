import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full pt-24 md:pt-[88px] bg-white overflow-hidden">
      <a href="#category" className="block w-full cursor-pointer overflow-hidden">
        <img 
          src="/hero-washing.png" 
          alt="Technical Driver Banner" 
          className="w-full h-auto block  duration-700 "
        />
      </a>
    </section>
  );
};

export default Hero;
