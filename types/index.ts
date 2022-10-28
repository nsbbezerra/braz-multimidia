type ImagesProps = {
  id: string;
  url: string;
};

interface ImagesPagesProps {
  banner: ImagesProps[];
  simulatorImage: ImagesProps[];
  imagesWhoIAm: ImagesProps[];
  bannerProducts: ImagesProps;
  bannerOther: ImagesProps;
  bannerCart: ImagesProps;
}

export type { ImagesPagesProps, ImagesProps };
