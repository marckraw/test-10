import React, { useState } from 'react';
import Image from 'next/image';
import { ImageSB as BpImageSB } from '@ef-global/backpack/ImageSB';
import { Image as BpImage, sbImageLoader } from '@ef-global/backpack/Image';

const ImageSB = (props) => {
  const { blok } = props;

  return (
    <BpImageSB blok={blok} asChild={true} data-slot={'Image'}>
      <BpChildImage
        priority={blok?.priority}
        data-slot={'Image'}
        asChild={true}
        focus={blok.smart_focus ? 'smart' : blok?.image?.focus}
      />
    </BpImageSB>
  );
};

const BpChildImage = (props) => {
  const { src, aspectRatios, priority, focus, ...rest } = props;
  const isSvg = src?.endsWith('.svg');
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return !isSvg ? (
    <BpImage
      asChild={true}
      loaded={imageIsLoaded}
      aspectRatios={aspectRatios}
      src={src}
      {...rest}
    >
      <NextImage
        priority={priority}
        focus={focus}
        onLoadingComplete={() => setImageIsLoaded(true)}
        data-slot={'Image'}
        aspectRatios={aspectRatios}
      />
    </BpImage>
  ) : (
    <BpImage
      src={src}
      loading={priority ? 'eager' : 'lazy'}
      aspectRatios={aspectRatios}
      {...rest}
      asChild={false}
      data-slot={'Image'}
    />
  );
};

const NextImage = (props) => {
  const {
    priority = false,
    alt,
    src,
    aspectRatios,
    focus,
    sizes,
    width,
    ...rest
  } = props;

  return (
    <Image
      loader={(loaderProps) =>
        sbImageLoader({ ...loaderProps, aspectRatios, focus })
      }
      src={src}
      fill={true}
      priority={priority ?? false}
      alt={alt}
      sizes={sizes || '100vw'}
      data-slot={'Image'}
      {...rest}
    />
  );
};

ImageSB.displayName = 'ImageSB';
export { ImageSB };
