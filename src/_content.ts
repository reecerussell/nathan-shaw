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
          src: [
            {
              src: '/assets/carousel/one.jpg',
              thumbSrc: '/assets/carousel/one.thumb.jpg',
              type: 'image/jpeg',
              isDefault: true,
            },
            {
              src: '/assets/carousel/one.webp',
              thumbSrc: '/assets/carousel/one.thumb.webp',
              type: 'image/webp',
            },
          ],
          alt: 'one',
        },
        {
          src: [
            {
              src: '/assets/carousel/two.jpg',
              type: 'image/jpeg',
              isDefault: true,
            },
          ],
          alt: 'two',
        },
        {
          src: [
            {
              src: '/assets/carousel/three.jpg',
              type: 'image/jpeg',
              isDefault: true,
            },
          ],
          alt: 'three',
        },
        {
          src: [
            {
              src: '/assets/carousel/four.jpg',
              thumbSrc: '/assets/carousel/four.thumb.jpg',
              type: 'image/jpeg',
              isDefault: true,
            },
            {
              src: '/assets/carousel/four.webp',
              thumbSrc: '/assets/carousel/four.thumb.webp',
              type: 'image/webp',
            },
          ],
          alt: 'four',
        },
        {
          src: [
            {
              src: '/assets/carousel/five.jpg',
              thumbSrc: '/assets/carousel/five.thumb.jpg',
              type: 'image/jpeg',
              isDefault: true,
            },
            {
              src: '/assets/carousel/five.webp',
              thumbSrc: '/assets/carousel/five.thumb.webp',
              type: 'image/webp',
            },
          ],
          alt: 'five',
        },
        {
          src: [
            {
              src: '/assets/carousel/six.jpg',
              thumbSrc: '/assets/carousel/six.thumb.jpg',
              type: 'image/jpeg',
              isDefault: true,
            },
            {
              src: '/assets/carousel/six.webp',
              thumbSrc: '/assets/carousel/six.thumb.webp',
              type: 'image/webp',
            },
          ],
          alt: 'six',
        },
        {
          src: [
            {
              src: '/assets/carousel/seven.jpg',
              thumbSrc: '/assets/carousel/seven.thumb.jpg',
              type: 'image/jpeg',
              isDefault: true,
            },
            {
              src: '/assets/carousel/seven.webp',
              thumbSrc: '/assets/carousel/seven.thumb.webp',
              type: 'image/webp',
            },
          ],
          alt: 'seven',
        },
        {
          src: [
            {
              src: '/assets/carousel/eight.jpg',
              thumbSrc: '/assets/carousel/eight.thumb.jpg',
              type: 'image/jpeg',
              isDefault: true,
            },
            {
              src: '/assets/carousel/eight.webp',
              thumbSrc: '/assets/carousel/eight.thumb.webp',
              type: 'image/webp',
            },
          ],
          alt: 'eight',
        },
      ],
    },
  },
};

export default content;
