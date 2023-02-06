import Image from "next/image";
import {
  CaretDown,
  CaretRight,
  House,
  ImageSquare,
  MagnifyingGlassPlus,
  Tag,
  TShirt,
  X,
} from "phosphor-react";
import { Fragment, useState } from "react";
import Footer from "../../../components/layout/Footer";
import HeadApp from "../../../components/layout/Head";
import Header from "../../../components/layout/Header";
import * as Popover from "@radix-ui/react-popover";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { clientQuery } from "../../../lib/urql";
import {
  FIND_CATEGORIES_PATH,
  FIND_COLLECTION_INFORMATION,
} from "../../../graphql/products";
import { BannersProps } from "../../../types";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";

type ImageProps = {
  id: string;
  url: string;
};

type CategoriesProps = {
  id: string;
  name: string;
};

type CollectionsProps = {
  id: string;
  category: { name: string };
  images: ImageProps[];
};

interface Props {
  banners: BannersProps | null;
  collections: CollectionsProps | null;
  categories: CategoriesProps[];
}

const Catalogos: NextPage<Props> = ({ collections, categories, banners }) => {
  const AccordionApp = () => (
    <Fragment>
      <div className="flex gap-3 bg-orange-500 text-white items-center py-2 px-3 font-semibold text-lg">
        <TShirt />
        CATEGORIAS
      </div>
      <div className="p-2">
        {categories.map((cat) => (
          <Link key={cat.id} href={`/produtos/catalogos/${cat.id}`} passHref>
            <a className="flex w-full items-center gap-2 text-marinho-500 font-semibold h-8 rounded-md hover:bg-marinho-500 hover:text-white active:bg-marinho-600 select-none px-4 cursor-pointer focus:outline-none focus:bg-marinho-500 focus:text-white uppercase">
              <Tag />
              {cat.name}
            </a>
          </Link>
        ))}
      </div>
    </Fragment>
  );

  const [preview, setPreview] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  const handleImage = (ref: string) => {
    setUrl(ref);
    setPreview(true);
  };

  return (
    <Fragment>
      <HeadApp
        title={`Catálogo - ${collections?.category.name} | Braz Camiseteria`}
      />
      <Header />
      {!banners ? (
        <div className="bg-gradient-to-b h-52 from-marinho-500 to-marinho-900 flex justify-center items-center flex-col px-5 text-white text-center">
          <ImageSquare className="text-7xl" />
          <strong className="text-3xl mt-2">CATÁLOGO DE PRODUTOS</strong>
        </div>
      ) : (
        <>
          <div className="w-full relative">
            <Image
              src={banners.desktop.url}
              width={1920}
              height={461}
              alt="Braz Multimidia banner"
              layout="responsive"
            />
          </div>
        </>
      )}

      <section className="py-10 container mx-auto px-5 xl:px-0 max-w-7xl">
        <div className="flex items-center gap-3">
          <Link href={"/"} passHref>
            <a className="flex items-center gap-2 cursor-pointer hover:underline">
              <House />
              Início
            </a>
          </Link>
          <CaretRight />
          <a className="flex items-center gap-2 cursor-pointer hover:underline">
            <ImageSquare />
            Catálogos
          </a>
          <CaretRight />
          <Link
            href={`/produtos/catalogos/${collections?.category.name || ""}`}
          >
            <a className="flex items-center gap-2 cursor-pointer hover:underline">
              <TShirt />
              {collections?.category.name}
            </a>
          </Link>
        </div>

        <div className="w-fit">
          <Popover.Root>
            <Popover.Trigger className="flex gap-3 bg-orange-500 text-white items-center py-2 px-3 font-semibold text-lg lg:hidden mt-5 rounded-md">
              <TShirt /> CATEGORIAS <CaretDown />
            </Popover.Trigger>
            <Popover.Anchor />
            <Popover.Portal>
              <Popover.Content className="Content-drop">
                <AccordionApp />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] lg:gap-10 mt-10">
          <div className="hidden lg:block rounded-md border overflow-hidden h-fit shadow">
            <AccordionApp />
          </div>

          <div>
            <strong className="heading text-marinho-500 flex items-center gap-3 w-full border-b border-b-marinho-500 pb-1 mb-5">
              <ImageSquare />{" "}
              <span className="line-clamp-1">{collections?.category.name}</span>
            </strong>
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
              {collections?.images.map((picture) => (
                <div
                  className="w-full relative rounded-md overflow-hidden"
                  key={picture.id}
                >
                  <Image
                    src={picture.url}
                    width={600}
                    height={600}
                    layout="responsive"
                    alt="Braz Multimidia"
                  />
                  <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
                    <button
                      className="text-gray-400 hover:text-white text-6xl p-2 rounded-2xl active:text-gray-400"
                      onClick={() => handleImage(picture.url)}
                    >
                      <MagnifyingGlassPlus />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <Dialog.Root onOpenChange={() => setPreview(!preview)} open={preview}>
        <Dialog.Portal>
          <Dialog.Overlay className="overlay" />
          <Dialog.Content className="dialog-content p-2">
            <div className="dialog-body-img max-w-md sm:max-w-lg">
              <Dialog.Close className="bg-sky-700 hover:bg-sky-800 rounded-full w-7 h-7 flex items-center justify-center active:bg-sky-700 absolute right-3 top-3 z-10 text-white">
                <X />
              </Dialog.Close>
              <div>
                <Image
                  src={url}
                  width={600}
                  height={600}
                  layout="responsive"
                  alt="Braz Multimidia"
                />
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Fragment>
  );
};

export default Catalogos;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await clientQuery
    .query(FIND_CATEGORIES_PATH, {})
    .toPromise();

  const products: CategoriesProps[] = data.categories;

  const paths = products.map((prod) => {
    return { params: { product: prod.id } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.product || "";

  const { data } = await clientQuery
    .query(FIND_COLLECTION_INFORMATION, { id })
    .toPromise();

  return {
    props: {
      banners: data.banners[0] || null,
      collections: data.collections || null,
      categories: data.categories || [],
    },
    revalidate: 30,
  };
};
