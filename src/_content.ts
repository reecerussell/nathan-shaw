import { Content } from './models';

const content: Content = {
  navItems: [
    {
      text: 'Home',
      target: '_self',
      url: '/',
    },
    {
      text: 'About Me',
      target: '_self',
      url: '/about',
    },
    {
      text: 'Education',
      target: '_self',
      url: '/Education',
    },
    {
      text: 'Contact Me',
      target: '_self',
      url: '/Contact',
    },
  ],
  about: {
    carousel: {
      maxItems: 3,
      items: [
        {
          src: '/assets/carousel/one.JPEG',
          alt: 'one',
        },
        {
          src: '/assets/carousel/two.JPG',
          alt: 'two',
        },
        {
          src: '/assets/carousel/three.JPG',
          alt: 'three',
        },
        {
          src: '/assets/carousel/four.JPG',
          alt: 'four',
        },
        {
          src: '/assets/carousel/five.JPG',
          alt: 'five',
        },
      ],
    },
  },
};

export default content;
