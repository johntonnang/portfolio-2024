'use client';

import Image from 'next/image';
import type { ProfileType } from '@/types';
import { motion } from 'framer-motion';
import { fadeAnimation, fadeInText } from '../lib/animations';
import BlobHero from './Blobs/BlobHero';

type HeroProps = {
  data: ProfileType;
};

const Hero: React.FC<HeroProps> = ({ data }) => {
  if (!data) {
    return <p>No information available.</p>;
  }

  const headline = data.headline.split(' ');
  const description = data.description.split(' ');

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeAnimation}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="pointer-events-none relative flex h-screen flex-col overflow-x-hidden px-6 after:mb-4 after:h-1 after:w-full after:rounded-full after:bg-orange md:px-12 md:after:mb-12 lg:px-16"
    >
      <div className="mt-6 flex h-full w-full flex-col gap-2 md:mt-12 md:flex-row md:gap-6">
        <div className="flex w-full flex-col justify-center gap-2 md:gap-6">
          <motion.h1 className="w-full max-w-[350px] text-6xl font-bold leading-tight tracking-tight text-orange-dark md:min-w-[370px] md:max-w-full md:text-8xl xl:text-9xl">
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
              transition={{ delay: 2.8 }}
              className="dot"
            />
          </motion.h1>
          <motion.h2 className="text-xl font-bold leading-tight tracking-tight text-orange-dark md:text-2xl lg:text-4xl">
            {description.map((word, i) => (
              <motion.span
                key={'title' + i}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInText}
                transition={{
                  duration: 0.4,
                  delay: 1.7 + i * 0.1,
                }}
              >
                {word}
                {i !== description.length - 1 && ' '}
              </motion.span>
            ))}
            <motion.span
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeInText}
              transition={{ delay: 2.8 }}
              className="dot"
            />
          </motion.h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeAnimation}
          transition={{ duration: 0.5, delay: 2.8 }}
          viewport={{ once: true }}
          className="flex h-full w-full items-center justify-end md:justify-center"
        >
          <Image
            className="min-h-96 pointer-events-none h-full w-52 -scale-x-100 object-contain md:w-96"
            src={data.profileImage.image}
            width={400}
            height={400}
            quality={100}
            alt={data.profileImage.alt}
          />
          <div className=" absolute right-0 top-2/3 -z-10 w-60 -translate-y-1/2 transform text-orange md:top-1/2 md:w-[600px]">
            <BlobHero />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
