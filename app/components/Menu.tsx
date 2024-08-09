'use client';

import Link from 'next/link';
import type { MenuType } from '@/types';
import { useMenu } from '../context/MenuContext';
import { motion } from 'framer-motion';
import { fadeAnimation } from '../lib/animations';
import { useRouter } from 'next/navigation';

type MenuProps = {
  navigationLinks?: MenuType['navigationLinks'];
  socialLinks: MenuType['socialLinks'];
  email?: string;
  number?: string;
  resumeURL?: string;
};
const Menu: React.FC<MenuProps> = ({
  navigationLinks,
  socialLinks,
  email,
  number,
  resumeURL,
}) => {
  const { isOpen, toggleMenu } = useMenu();
  const router = useRouter();

  const handleNavigation = async (path: string) => {
    try {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          toggleMenu((error: any) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        }, 500);
      });

      router.push(path);
    } catch (error) {
      console.log(`Error navigating to ${path}:`, error);
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeAnimation}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center"
    >
      <button
        aria-label="Navigation toggle"
        onClick={toggleMenu}
        className="text-white fixed bottom-6 left-1/2 z-[60] h-[50px] w-[50px] -translate-x-1/2 transform rounded-full border-2 border-background-light focus:outline-none"
      >
        <div
          className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
            isOpen ? '-translate-x-[2.5px]' : ''
          }`}
        >
          <span
            className={`inline-block h-[2px] w-[21px] rounded-full bg-light transition-all duration-300 ${
              isOpen ? 'rotate-left' : ''
            }`}
          ></span>
          <span
            className={`h-[2px] w-5 rounded-full bg-light transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`h-[2px] w-[21px] rounded-full bg-light transition-all duration-300 ${
              isOpen ? 'rotate-right' : ''
            }`}
          ></span>
        </div>
      </button>
      <div
        className="fixed bottom-6 left-1/2 z-20 h-12 w-12 -translate-x-1/2 transform rounded-full bg-orange"
        style={{
          transition: 'transform 1s ease-in-out',
          transform: isOpen ? 'scale(100)' : '',
        }}
      ></div>
      <motion.div
        style={{ transitionDelay: isOpen ? '300ms' : '0s' }}
        className={`fixed inset-0 mt-4 flex p-6 transition-all duration-1000 ease-in-out ${
          isOpen ? 'z-50' : '-z-10 opacity-0'
        }`}
      >
        <ul className="flex h-full w-full flex-col gap-2 md:gap-8">
          {navigationLinks?.map((link, index) => (
            <li key={index} className="relative flex h-16 w-full md:h-32">
              <Link
                href={index === 0 ? '/' : `/${link.toLowerCase()}`}
                passHref
                onClick={() => handleNavigation('/')}
                className="link-small md:link absolute text-5xl font-semibold text-light md:text-9xl"
              >
                {link}
                <span className="text-sm text-orange-dark md:text-xl">
                  0{index + 1}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex h-full w-full flex-col items-end justify-end  gap-2 md:justify-start md:gap-4">
          <div className="flex flex-col gap-2 md:gap-4">
            <h2 className="text-2xl font-semibold text-light md:text-5xl">
              Socials
            </h2>
            <ul className="flex w-full flex-col gap-1 md:gap-2">
              {Object.entries(socialLinks).map(([platform, url]) => (
                <li
                  key={platform}
                  className="relative flex h-8 w-full justify-end"
                >
                  <Link
                    className="link-small text-decoration-none absolute text-lg font-semibold capitalize text-light md:text-2xl"
                    href={url}
                  >
                    {platform}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h2 className="text-2xl font-semibold text-light md:text-5xl">
              Contact
            </h2>
            <ul className="flex w-full flex-col gap-1 md:gap-2">
              <li key={email} className="relative flex h-8 w-full justify-end">
                <Link
                  className="link-small text-decoration-none absolute text-lg font-semibold text-light md:text-2xl"
                  href={`mailto:${email}`}
                >
                  Email
                </Link>
              </li>
              <li key={number} className="relative flex h-8 w-full justify-end">
                <Link
                  className="link-small text-decoration-none absolute justify-self-end text-lg font-semibold text-light md:text-xl"
                  href={`tel:${number}`}
                >
                  Phone
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative flex h-12 w-full justify-end">
            <Link
              href={`${resumeURL}`}
              target="_blank"
              className="link-small md:link-medium text-decoration-none absolute  text-2xl font-semibold text-light md:text-5xl"
            >
              Résumé
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Menu;
