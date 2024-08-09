'use client';

import { getProjects } from '@/sanity/sanity.query';
import type { ProjectsType } from '@/types';
import Projects from '../components/Projects';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fadeAnimation, fadeInText } from '../lib/animations';

const ProjectsPage = () => {
  const [projectsData, setProjectsData] = useState<ProjectsType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects();
      setProjectsData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <main>
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeAnimation}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex h-screen flex-col gap-4 overflow-scroll p-6 pb-32 md:p-16 lg:gap-14"
        >
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={fadeAnimation}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-6xl font-bold leading-tight tracking-tight text-orange-dark md:text-8xl xl:text-9xl"
          >
            Projects
            <motion.span
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeInText}
              transition={{ delay: 1.5 }}
              className="dot"
            />
          </motion.h1>
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-14">
            {projectsData &&
              projectsData.map((data, index) => (
                <div key={index}>
                  <Projects data={data} />
                </div>
              ))}
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default ProjectsPage;
