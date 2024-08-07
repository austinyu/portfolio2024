'use client';

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='flex flex-col lg:flex-row h-full'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left'
        >
          <h1 className='
            text-white mb-4 text-4xl sm:text-5xl 
            lg:text-8xl lg:leading-normal font-extrabold
          '>
            <span className='
              text-transparent bg-clip-text 
              bg-gradient-to-r from-primary-400 to-secondary-600
            '>
              Hi! I am Austin
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Austin',
                1000,
                'Web Dev',
                1000,
                'Game Dev',
                1000,
                'UI/UX Designer',
                1000
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7EB] text-base sm:text-lg lg:text-xl mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            eget felis eget nunc lacinia ultricies. Nullam eget felis eget
            nunc lacinia ultricies.
          </p>
          <div>
            <button className='
              px-6 py-3 w-full sm:w-fit rounded-full mr-4
              bg-gradient-to-br
              from-primary-500 via-secondary-500 to-secondary-500
              hover:bg-slate-200 text-white
            '>
              Hire me
            </button>
            <button className='
                px-1 py-1 w-full sm:w-fit rounded-full 
                bg-gradient-to-br from-primary-500 via-secondary-500 to-secondary-500 
                hover:bg-slate-800 text-white mt-3
              '>
              <span className='
                block bg-[#121212] hover:bg-slate-800, rounded-full px-5 py-2
              '>
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-9'>
          <div className='
            rounded-full bg-[#181818] relative w-[250px] h-[250px] 
            lg:w-[400px] lg:h-[400px]
          '>
            <Image
              src='/images/hero-image.png'
              alt='Hero Image'
              className='
                absolute transform -translate-x-1/2 
                -translate-y-1/2 top-1/2 left-1/2'
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
