type ImagesProps = {
  id: string;
  url: string;
};

type BannersProps = {
  id: string;
  desktop: ImagesProps;
  mobile: ImagesProps;
  redirect?: string | null;
};

type CategoriesProps = {
  id: string;
  name: string;
  image: ImagesProps;
};

interface ImagesPagesProps {
  banners: BannersProps[];
  simulatorImage: ImagesProps[];
  imagesWhoIAm: ImagesProps[];
  categories: CategoriesProps[];
}

type ProductsCategoryPageProps = {
  id: string;
  name: string;
  price: number;
  images: ImagesProps[];
};

interface ProductsProps {
  id: string;
  name: string;
  price: number;
  images: ImagesProps[];
}

interface CatalogProps {
  id: string;
  images: ImagesProps[];
}

type CategoriesPageProps = {
  id: string;
  name: string;
};

type CategoryProps = {
  id: string;
  name: string;
  products: ProductsCategoryPageProps[];
  collections: CatalogProps[];
};

interface ProductsPageProps {
  banners: BannersProps[];
  categories: CategoriesPageProps[];
  category: CategoryProps;
}

export type {
  ImagesPagesProps,
  ImagesProps,
  CategoriesProps,
  BannersProps,
  ProductsPageProps,
  ProductsProps,
  CatalogProps,
};
