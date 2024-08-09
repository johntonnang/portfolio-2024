import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { MenuProvider } from './context/MenuContext';
import './globals.css';
import { MenuType } from '@/types';
import { getMenu } from '@/sanity/sanity.query';
import Menu from './components/Menu';

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'John Tönnäng | Developer',
  description: 'Portfolio for John Tönnäng',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuData: MenuType[] = await getMenu();
  return (
    <MenuProvider>
      <html lang="en">
        <body className={`${montserrat.className} bg-background-light`}>
          {menuData &&
            menuData.map((data, index) => (
              <header key={index}>
                <Menu
                  navigationLinks={data.navigationLinks}
                  socialLinks={data.socialLinks}
                  email={data.email}
                  number={data.number}
                  resumeURL={data.resumeURL}
                />
              </header>
            ))}
          {children}
        </body>
      </html>
    </MenuProvider>
  );
}
