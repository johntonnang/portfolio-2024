'use client';

import React from 'react';
import type { ProfileType } from '@/types';
import { motion } from 'framer-motion';
import { fadeAnimation } from '../lib/animations';
import BlobEducation from './Blobs/BlobEducation';

type EducationProps = {
  educations: ProfileType['education'];
};

const Education: React.FC<EducationProps> = ({ educations }) => {
  if (!educations || educations.length === 0) {
    return <p>No education information available.</p>;
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeAnimation}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="relative mt-6 flex h-screen flex-col overflow-x-hidden px-6 after:mb-4 after:h-1 after:w-full after:rounded-full after:bg-orange md:my-12 md:px-12 md:after:mb-12 lg:px-16 xl:justify-evenly"
    >
      <div className="mt-6 flex h-full w-full flex-col items-end gap-6 text-end md:mt-12">
        <h2 className="dot mb-6 text-3xl font-bold leading-tight tracking-tight text-orange-dark md:text-4xl xl:text-6xl">
          Education
        </h2>
        <>
          {educations.map((education, i) => (
            <div key={i}>
              <p className="text-sm uppercase text-orange md:text-base xl:text-xl">
                {education.startDate.selectDate} -{' '}
                {education.endDate.selectDate}
              </p>
              <h3 className="dot mb-2 min-w-full text-xl font-bold leading-tight tracking-tight text-orange-dark md:text-3xl xl:text-4xl">
                {education.school}
              </h3>
              <p className="xl:text-xl">{education.degree}</p>
              <p className="mb-6 md:mb-12 xl:text-xl">
                {education.description}
              </p>
            </div>
          ))}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeAnimation}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute left-0 top-0 -z-10 w-2/5 text-orange md:left-0"
          >
            <BlobEducation />
          </motion.div>
        </>
      </div>
    </motion.section>
  );
};

export default Education;
