'use client';

import Image from 'next/image';
import type { AboutType } from '@/types';
import { motion } from 'framer-motion';
import { fadeAnimation, fadeInText } from '../lib/animations';
import BlobHero from './Blobs/BlobHero';
import BlobExperience from './Blobs/BlobExperience';
import Link from 'next/link';

type AboutProps = {
  data: AboutType;
};

const About: React.FC<AboutProps> = ({ data }) => {
  if (!data) {
    return <p>No information available.</p>;
  }

  const headline = data.headline.split(' ');

  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeAnimation}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="pointer-events-none relative flex h-screen flex-col overflow-hidden px-6 after:mb-4 after:h-1 after:w-full after:rounded-full after:bg-orange md:my-12 md:px-12 md:after:mb-12 lg:px-16"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeAnimation}
          transition={{ duration: 0.5, delay: 2.5 }}
          viewport={{ once: true }}
          className="-z-10"
        >
          <Image
            className="min-h-96 pointer-events-none absolute right-0 top-0 w-52 -scale-x-100 rounded-full md:right-28 md:top-12 md:w-96"
            src={data.profileImage.image}
            width={400}
            height={400}
            quality={100}
            alt={data.profileImage.alt}
          />
          <div className="absolute right-0 top-4 -z-10 w-52 text-orange md:right-12 md:top-0 md:w-[500px]">
            <BlobHero />
          </div>
        </motion.div>
        <div className="my-6 flex h-full w-full flex-col justify-end gap-4 md:mt-40 md:justify-between">
          <motion.h1 className="w-full max-w-[275px] text-4xl font-bold leading-tight tracking-tight text-orange-dark md:w-1/2 md:max-w-full md:text-7xl xl:w-[700px] xl:text-8xl">
            {headline.map((word, i) => (
              <motion.span
                key={'title' + i}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInText}
                transition={{
                  duration: 0.4,
                  delay: 1.2 + i * 0.1,
                }}
              >
                {word}
                {i !== headline.length - 1 && ' '}
              </motion.span>
            ))}
            <motion.span
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeInText}
              transition={{ delay: 2 }}
              className="exclamation-mark"
            />
          </motion.h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeAnimation}
            transition={{ duration: 0.5, delay: 2 }}
            className="mb-2 flex flex-col gap-4 md:mb-12 md:gap-8"
          >
            <h2 className="dot w-full text-xl font-bold leading-tight tracking-tight text-orange-dark md:w-1/2 md:text-3xl xl:text-4xl">
              {data.shortBio}
            </h2>
            <p className="w-full text-sm md:w-1/2 md:text-base">
              {data.fullBio}
            </p>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeAnimation}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="relative mt-6 flex h-screen flex-col overflow-hidden px-6 after:mb-4 after:h-1 after:w-full after:rounded-full after:bg-orange md:my-12 md:px-12 md:after:mb-12 lg:px-16"
      >
        <div className="my-6 flex h-full w-full flex-col justify-between gap-6 md:mt-12">
          <div className="flex flex-col gap-2 md:gap-4">
            <h3 className="dot text-3xl font-bold leading-tight tracking-tight text-orange-dark md:text-4xl xl:text-6xl">
              Get to know me
            </h3>
            <>
              {data.hobbies.map((hobby, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-full md:w-1/2">
                    <p className="md:text-xl">{hobby.hobbyDescription}</p>
                  </div>
                </div>
              ))}
            </>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h4 className="dot w-full text-3xl font-bold leading-tight tracking-tight text-orange-dark md:text-4xl xl:text-6xl">
              Feel free to reach out
            </h4>
            <div className="flex w-full">
              <ul className="mb-4 flex w-full flex-col gap-1 md:max-w-[220px] md:gap-4">
                {Object.entries(data.socialLinks).map(([platform, url]) => (
                  <li key={platform} className="relative flex h-8 w-full">
                    <Link
                      className="link-small-dark text-decoration-none absolute text-lg font-medium capitalize md:text-2xl"
                      href={url}
                    >
                      {platform}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mb-4 flex w-full flex-col gap-1 md:max-w-[220px] md:gap-4">
                <li className="relative flex h-8 w-full">
                  <Link
                    className="link-small-dark text-decoration-none absolute text-lg font-medium capitalize md:text-2xl"
                    href={`mailto:${data.email}`}
                  >
                    Email
                  </Link>
                </li>
                <li className="relative flex h-8 w-full">
                  <Link
                    className="link-small-dark text-decoration-none absolute text-lg font-medium capitalize md:text-2xl"
                    href={`tel:${data.number}`}
                  >
                    Phone
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute bottom-48 right-0 -z-10 w-52 text-orange md:bottom-12 md:right-0 md:w-[500px]">
            <BlobExperience />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
