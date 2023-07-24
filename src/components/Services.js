import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// Link
import { Link } from 'react-scroll';

// services data
const services = [
  {
    name: 'UI/UX Design',
    description:
      'Web Design is one of the things I have always wanted to get good at, combining my skill and creativeness from photo editing through web designing.',
  },
  {
    name: 'Video Editing',
    description:
      'I enjoy editing videos, whether it be simply adding captions, or fully-fledged edits with special effects.',
  },
  {
    name: 'Photo Editing',
    description:
      'Photo editing was one of the skills I started getting good at, it is one of the first skills I learned how to do.',
  },
  {
    name: '3D Rendering',
    description:
      'I found the passion of 3D Rendering through YouTube videos, mostly 3d renders of cars, and also physics simulations.',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I do video editing, photo editing, 3D Rendering, and Web Design
            </h3>
            <Link
             to='work'
             activeClass='active'
             smooth={true}
             spy={true}>
            <button className='btn btn-sm'>See my work</button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
