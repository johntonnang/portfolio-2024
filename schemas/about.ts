import { defineField } from 'sanity';
import { BiLaptop } from 'react-icons/bi';

export const about = {
  name: 'about',
  title: 'About',
  type: 'document',
  icon: BiLaptop,
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      description: 'Upload a profile picture',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'number',
      title: 'Phone number',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      rows: 4,
    },
    {
      name: 'fullBio',
      title: 'Full Bio',
      type: 'text',
      rows: 8,
    },
    {
      name: 'hobbies',
      title: 'Hobbies',
      type: 'array',
      description: 'List your hobbies',
      of: [
        {
          title: 'Hobby',
          type: 'object',
          fields: [
            {
              title: 'Hobby title',
              name: 'hobbyTitle',
              type: 'string',
            },
            {
              title: 'Description',
              name: 'hobbyDescription',
              type: 'text',
              rows: 6,
            },
          ],
        },
      ],
    },
    {
      name: 'resumeURL',
      title: 'Upload Resume',
      type: 'file',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      description: 'Add your social media links:',
      fields: [
        {
          name: 'github',
          title: 'Github URL',
          type: 'url',
          initialValue: 'https://github.com/',
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
          initialValue: 'https://instagram.com/',
        },
        {
          name: 'linkedin',
          title: 'Linkedin URL',
          type: 'url',
          initialValue: 'https://linkedin.com/in/',
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },
  ],
};
