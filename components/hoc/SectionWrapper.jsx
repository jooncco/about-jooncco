import React from 'react';
import {motion} from 'framer-motion';
import {styles} from '@/app/styles';
import {staggerContainer} from '@/utils/motion';

export default function SectionWrapper(Component, idName) {
  const WrappedSection = () => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.25}}
        className={`max-w-7xl mx-auto relative z-0`}>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

  return WrappedSection;
}
