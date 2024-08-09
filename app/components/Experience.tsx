'use client';

import type { ProfileType } from '@/types';
import { motion } from 'framer-motion';
import { fadeAnimation } from '../lib/animations';
import BlobExperience from './Blobs/BlobExperience';

type ExperienceProps = {
  experiences: ProfileType['experience'];
};

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  if (!experiences || experiences.length === 0) {
    return <p>No experience information available.</p>;
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeAnimation}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="relative mt-6 flex flex-col overflow-x-hidden px-6 after:mb-4 after:h-1 after:w-full after:rounded-full after:bg-orange md:my-12 md:px-12 md:after:mb-12 lg:px-16"
    >
      <div className="mt-6 flex h-full w-full flex-col gap-12">
        <h2 className="dot text-3xl font-bold leading-tight tracking-tight text-orange-dark md:text-4xl xl:text-6xl">
          Experience
        </h2>
        <div className="flex h-full w-full flex-col justify-center gap-6">
          {experiences.map((experience, i) => (
            <div key={i} className="flex w-full flex-col gap-6 lg:flex-row">
              <div className="w-full md:w-3/5">
                <p className="text-sm uppercase text-orange md:text-base">
                  {experience.startDate.selectDate} -{' '}
                  {experience.endDate.selectDate}
                </p>
                <h3 className="dot mb-2 text-xl font-bold leading-tight tracking-tight text-orange-dark md:text-3xl">
                  {experience.role} • {experience.title}
                </h3>
                <p className="mb-2 text-sm md:text-base">
                  {experience.description}
                </p>
                <ul className="mb-6 flex flex-wrap gap-2 md:mb-12">
                  {experience.techStack.map((techStack, i) => (
                    <li
                      key={i}
                      className="rounded-full bg-orange px-2 py-1 text-xs text-light md:text-sm"
                    >
                      {techStack}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeAnimation}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute right-0 top-0 -z-10 w-52 text-orange md:w-[500px]"
          >
            <BlobExperience />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
