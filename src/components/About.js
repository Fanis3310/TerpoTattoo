import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer hook
import {useInView} from 'react-intersection-observer'
//motion
import {motion} from 'framer-motion'
//variant
import {fadeIn} from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5, 
  })
  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/*img*/}
        <motion.div 
         variants={fadeIn('right', 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3}}
         className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
        {/*itext*/}
        <div className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>
            I'm a tattoo artist and tattoo removal with over 4 years of experience. 
          </h3>
          <p className='mb-6'>
            Whether you're looking to get inked or remove an old tattoo, 
            my experience and passion for the craft will ensure that you leave my studio feeling confident and satisfied.
          </p>
          {/*stats*/}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2' >
                {inView ?
                  <CountUp start={0} end={4} duration={5} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
                Experience 
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2' >
                {inView ?
                  <CountUp start={0} end={3} duration={5} /> : null}
                  k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Tattoo <br />
                Projects 
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2' >
                {inView ?
                  <CountUp start={0} end={5} duration={5} /> : null}
                  k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br />
                Clients 
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>
              My Work
            </a>
         </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
