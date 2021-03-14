import { FunctionComponent, useState } from 'react';
import { Modal } from 'src/components';
import { supportsWebP } from 'src/utils';

interface CarouselItemSrcProps {
  type: string;
  src: string;
  thumbSrc?: string;
  isDefault?: boolean;
}

interface CarouselItemProps {
  src: CarouselItemSrcProps[];
  alt: string;
}

// Currently only supports WebP
const getThumbBackgroundUrl = (
  defaultSrc: CarouselItemSrcProps,
  srcs: CarouselItemSrcProps[]
): string => {
  for (let i = 0; i < srcs.length; i++) {
    const src = srcs[i];
    if (src.type === 'image/webp' && supportsWebP()) {
      return src.thumbSrc || src.src;
    }
  }

  return defaultSrc.thumbSrc || defaultSrc.src;
};

const CarouselItem: FunctionComponent<CarouselItemProps> = ({ src, alt }) => {
  const [open, setOpen] = useState(false);

  if (!src || src.length < 1) {
    console.error("No src values we're provided!");
    return null;
  }

  const defaultSrc = src.find(x => x.isDefault) || src[0];
  const otherSources = src.filter(x => !x.isDefault);

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <picture>
          {otherSources.map((img, key) => (
            <source key={key} srcSet={img.src} type={img.type} />
          ))}

          <img
            src={defaultSrc.src}
            alt={alt}
            className="ns-carousel-modal-image"
          />
        </picture>
      </Modal>
      <div
        className="ns-carousel-item"
        style={{
          backgroundImage: `url('${getThumbBackgroundUrl(
            defaultSrc,
            otherSources
          )}')`,
        }}
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
        <CarouselItem key={key} src={item.src} alt={item.alt} />
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
export type { CarouselProps, CarouselItemProps, CarouselItemSrcProps };
