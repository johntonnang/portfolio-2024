import { getProfile } from '@/sanity/sanity.query';
import type { ProfileType } from '@/types';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';

export default async function Home() {
  const profileData: ProfileType[] = await getProfile();

  return (
    <>
      <main>
        {profileData &&
          profileData.map((data, index) => (
            <div key={index} className="h-screen overflow-scroll">
              <Hero data={data} />
              <Experience experiences={data.experience} />
              <Education educations={data.education} />
            </div>
          ))}
      </main>
    </>
  );
}
