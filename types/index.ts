import { PortableTextBlock } from 'sanity';

export type ProfileType = {
  _id: string;
  headline: string;
  description: string;
  profileImage: {
    image: string;
    alt: string;
  };
  experience: {
    _key: string;
    title: string;
    role: string;
    startDate: {
      selectDate: string;
    };
    endDate: {
      selectDate: string;
    };
    description: string;
    techStack: string[];
    companyLogo: {
      image: string;
      alt: string;
    };
  }[];
  education: {
    _key: string;
    school: string;
    degree: string;
    subjectArea: string;
    startDate: {
      selectDate: string;
    };
    endDate: {
      selectDate: string;
    };
    description: string;
    courses: string[];
  }[];
  skills: string[];
};

export type AboutType = {
  _id: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string;
  };
  email: string;
  number: string;
  location: string;
  shortBio: string;
  fullBio: string;
  hobbies: {
    _key: string;
    hobbyTitle: string;
    hobbyDescription: string;
  }[];
  resumeURL: string;
  socialLinks: string[];
};

export type MenuType = {
  _id: string;
  email: string;
  number: string;
  socialLinks: string[];
  resumeURL: string;
  navigationLinks: string[];
};

export type ProjectsType = {
  _id: string;
  projectTitle: string;
  projectImage: {
    _key: string;
    image: {
      _type: string;
      alt: string;
      asset: {
        url: string;
        _type: string;
      };
    };
  }[];
  description: string;
  techStack: string[];
  skills: string[];
  url: string;
};
