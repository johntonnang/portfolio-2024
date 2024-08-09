import { BiMenu } from 'react-icons/bi';

export const menu = {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: BiMenu,
  fields: [
    {
      name: 'navigationLinks',
      title: 'Navigation links',
      type: 'array',
      of: [{ name: 'link', type: 'string' }],
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
