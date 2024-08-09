import { getAbout } from '@/sanity/sanity.query';
import type { AboutType } from '@/types';
import About from '../components/About';

export default async function AboutPage() {
  const aboutData: AboutType[] = await getAbout();

  return (
    <>
      <main>
        {aboutData &&
          aboutData.map((data, index) => (
            <div key={index} className="h-screen overflow-scroll">
              <About data={data} />
            </div>
          ))}
      </main>
    </>
  );
}
