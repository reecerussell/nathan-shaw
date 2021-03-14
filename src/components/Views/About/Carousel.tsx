import { FunctionComponent, useState } from 'react';
import { Modal } from 'src/components';

interface CarouselItemProps {
  key?: string | number;
  src: string;
  thumbSrc?: string;
  alt: string;
}

const CarouselItem: FunctionComponent<CarouselItemProps> = ({
  key,
  thumbSrc,
  src,
  alt,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <img src={src} alt={alt} className="ns-carousel-modal-image" />
      </Modal>
      <div
        className="ns-carousel-item"
        key={key}
        style={{ backgroundImage: `url('${thumbSrc || src}')` }}
        onClick={() => setOpen(true)}
      ></div>
    </>
  );
};

interface CarouselProps {
  items: CarouselItemProps[];
  maxItems?: number;
}

const Carousel: FunctionComponent<CarouselProps> = ({ items, maxItems }) => {
  const [startIndex, setStartIndex] = useState(0);

  const maxItemCount = Math.min(maxItems || 3, items.length);

  const handleNext = () => {
    if (startIndex === maxItemCount) {
      setStartIndex(0);
    } else {
      setStartIndex(startIndex + 1);
    }
  };

  let scopedItems = items;
  if (items.length > maxItemCount) {
    scopedItems = items.slice(startIndex, startIndex + maxItemCount);
    if (scopedItems.length < maxItemCount) {
      scopedItems = scopedItems.concat(
        items.slice(0, maxItemCount - scopedItems.length)
      );
    }
  }

  return (
    <div className="ns-carousel">
      {scopedItems.map((item, key) => (
        <CarouselItem key={key} {...item} />
      ))}
      <div className="ns-carousel-next" onClick={handleNext}>
        <div className="ns-carousel-next-button">
          <span className="ns-line" />
          <span className="ns-line" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
export { Carousel, CarouselItem };
export type { CarouselProps, CarouselItemProps };
