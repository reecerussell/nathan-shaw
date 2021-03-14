import { CarouselItemProps } from '../components/Views/About/Carousel';

interface About {
  carousel: AboutCarousel;
}

interface AboutCarousel {
  maxItems: number;
  items: CarouselItemProps[];
}

export default About;
export type { About, AboutCarousel };
