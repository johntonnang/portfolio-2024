import { groq } from 'next-sanity';
import client from './sanity.client';

export async function getProfile() {
  try {
    return client.fetch(
      groq`*[_type == "profile"] {
      _id,
      headline,
      description,
      profileImage {alt, "image": asset->url},
      experience[] {
          title,
          companyLogo { alt, "image": asset->url },
          description,
          _key,
          startDate { selectDate },
          role,
          techStack,
          endDate { selectDate }
        },
      education,
      skills,
    }`
    );
  } catch (error) {
    console.log({ message: 'Error when fetching profile data.' });
  }
}

export async function getAbout() {
  try {
    return client.fetch(
      groq`*[_type == "about"] {
      _id,
      headline,
      profileImage {alt, "image": asset->url},
      email,
      number,
      location,
      shortBio,
      fullBio,
      hobbies,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
    }`
    );
  } catch (error) {
    console.log({ message: 'Error when fetching about data.' });
  }
}

export async function getProjects() {
  try {
    return client.fetch(
      groq`*[_type == "projects"] {
        _id,
        projectTitle,
        projectImage[]{
          _key,
          image {
            _type,
            alt,
            asset->{
              url,
              _type
            }
          }
        },
        description,
        techStack,
        url,
      }`
    );
  } catch (error) {
    console.log({ message: 'Error when fetching projects data.' });
  }
}

export async function getMenu() {
  try {
    return client.fetch(
      groq`*[_type == "menu"] {
      _id,
      navigationLinks,
      email,
      number,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
    }`
    );
  } catch (error) {
    console.log({ message: 'Error when fetching menu data.' });
  }
}
