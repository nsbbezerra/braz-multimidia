import Image from "next/image";
import {
  CaretDown,
  CaretRight,
  House,
  ImageSquare,
  MagnifyingGlassPlus,
  TShirt,
} from "phosphor-react";
import { Fragment } from "react";
import Footer from "../../../components/layout/Footer";
import HeadApp from "../../../components/layout/Head";
import Header from "../../../components/layout/Header";
import * as Accordion from "@radix-ui/react-accordion";
import * as Popover from "@radix-ui/react-popover";

export default function Catalogos() {
  const AccordionApp = () => (
    <Accordion.Root
      type="single"
      className={"Container-accordion"}
      defaultValue="item-1"
    >
      <Accordion.Item value="item-1" className={"Item-accordion"}>
        <Accordion.Header className={"Header-accordion"}>
          <Accordion.Trigger className={"Trigger-accordion"}>
            <TShirt className="flex-shrink-0" />
            <span>Camiseta manga longa longa longa</span>
            <CaretDown aria-hidden className={"Icon-accordion"} />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={"Content-accordion"}>
          <div className="flex flex-col gap-1">
            <a className="Content-link-item-accordion">
              <ImageSquare className="flex-shrink-0" />
              <span className="block line-clamp-1">
                Camiseta manga longa Camiseta manga longa
              </span>
            </a>
            <a className="Content-link-item-accordion">
              <ImageSquare className="flex-shrink-0" />
              <span className="block line-clamp-1">Camiseta manga longa</span>
            </a>
            <a className="Content-link-item-accordion">
              <ImageSquare className="flex-shrink-0" />
              <span className="block line-clamp-1">Camiseta manga longa</span>
            </a>
            <a className="Content-link-item-accordion">
              <ImageSquare className="flex-shrink-0" />
              <span className="block line-clamp-1">Camiseta manga longa</span>
            </a>
            <a className="Content-link-item-accordion">
              <ImageSquare className="flex-shrink-0" />
              <span className="block line-clamp-1">Camiseta manga longa</span>
            </a>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2" className={"Item-accordion"}>
        <Accordion.Header className={"Header-accordion"}>
          <Accordion.Trigger className={"Trigger-accordion"}>
            <TShirt />
            <span>Is it unstyled?</span>
            <CaretDown aria-hidden className={"Icon-accordion"} />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={"Content-accordion"}>
          <div className="flex flex-col gap-1">
            <a className="Content-link-item-accordion">
              <ImageSquare className="flex-shrink-0" />
              <span className="block line-clamp-1">
                Camiseta manga longa Camiseta manga longa
              </span>
            </a>
            <a className="Content-link-item-accordion">
              <ImageSquare className="flex-shrink-0" />
              <span className="block line-clamp-1">Camiseta manga longa</span>
            </a>
            <a className="Content-link-item-accordion">
              <ImageSquare className="flex-shrink-0" />
              <span className="block line-clamp-1">Camiseta manga longa</span>
            </a>
            <a className="Content-link-item-accordion">
              <ImageSquare className="flex-shrink-0" />
              <span className="block line-clamp-1">Camiseta manga longa</span>
            </a>
            <a className="Content-link-item-accordion">
              <ImageSquare className="flex-shrink-0" />
              <span className="block line-clamp-1">Camiseta manga longa</span>
            </a>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3" className={"Item-accordion"}>
        <Accordion.Header className={"Header-accordion"}>
          <Accordion.Trigger className={"Trigger-accordion"}>
            <TShirt />
            <span>Can it be animated?</span>
            <CaretDown aria-hidden className={"Icon-accordion"} />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={"Content-accordion"}>
          <div className="flex flex-col gap-1">
            <a className="Content-link-item-accordion">
              <ImageSquare className="flex-shrink-0" />
              <span className="block line-clamp-1">
                Camiseta manga longa Camiseta manga longa
              </span>
            </a>
            <a className="Content-link-item-accordion">
              <ImageSquare className="flex-shrink-0" />
              <span className="block line-clamp-1">Camiseta manga longa</span>
            </a>
            <a className="Content-link-item-accordion">
              <ImageSquare className="flex-shrink-0" />
              <span className="block line-clamp-1">Camiseta manga longa</span>
            </a>
            <a className="Content-link-item-accordion">
              <ImageSquare className="flex-shrink-0" />
              <span className="block line-clamp-1">Camiseta manga longa</span>
            </a>
            <a className="Content-link-item-accordion">
              <ImageSquare className="flex-shrink-0" />
              <span className="block line-clamp-1">Camiseta manga longa</span>
            </a>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );

  return (
    <Fragment>
      <HeadApp title="Catalogos | Braz Multimídia" />
      <Header />
      <div className="w-full relative">
        <Image
          src={"/img/banner.webp"}
          width={1920}
          height={461}
          layout="responsive"
          alt="Braz Multimidia banner"
        />
      </div>

      <section className="py-10 container mx-auto px-5 xl:px-0 max-w-7xl">
        <div className="flex items-center gap-3">
          <a className="flex items-center gap-2 cursor-pointer hover:underline">
            <House />
            Início
          </a>
          <CaretRight />
          <a className="flex items-center gap-2 cursor-pointer hover:underline">
            <ImageSquare />
            Catálogos
          </a>
          <CaretRight />
          <a className="flex items-center gap-2 cursor-pointer hover:underline">
            <TShirt />
            Camiseta
          </a>
        </div>

        <div className="w-fit">
          <Popover.Root>
            <Popover.Trigger className="flex gap-3 bg-orange-500 text-white items-center py-2 px-3 font-semibold text-lg lg:hidden mt-5 rounded-md">
              <TShirt /> PRODUTOS <CaretDown />
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
              <span className="line-clamp-1">Camiseta manga longa</span>
            </strong>
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
              <div className="w-full relative rounded-md overflow-hidden">
                <Image
                  src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
                  width={600}
                  height={600}
                  layout="responsive"
                  alt="Braz Multimidia"
                />
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
                  <button className="text-gray-400 hover:text-white text-6xl p-2 rounded-2xl active:text-gray-400">
                    <MagnifyingGlassPlus />
                  </button>
                </div>
              </div>
              <div className="w-full relative rounded-md overflow-hidden">
                <Image
                  src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
                  width={600}
                  height={600}
                  layout="responsive"
                  alt="Braz Multimidia"
                />
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
                  <button className="text-gray-400 hover:text-white text-6xl p-2 rounded-2xl active:text-gray-400">
                    <MagnifyingGlassPlus />
                  </button>
                </div>
              </div>
              <div className="w-full relative rounded-md overflow-hidden">
                <Image
                  src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
                  width={600}
                  height={600}
                  layout="responsive"
                  alt="Braz Multimidia"
                />
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
                  <button className="text-gray-400 hover:text-white text-6xl p-2 rounded-2xl active:text-gray-400">
                    <MagnifyingGlassPlus />
                  </button>
                </div>
              </div>
              <div className="w-full relative rounded-md overflow-hidden">
                <Image
                  src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
                  width={600}
                  height={600}
                  layout="responsive"
                  alt="Braz Multimidia"
                />
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
                  <button className="text-gray-400 hover:text-white text-6xl p-2 rounded-2xl active:text-gray-400">
                    <MagnifyingGlassPlus />
                  </button>
                </div>
              </div>
              <div className="w-full relative rounded-md overflow-hidden">
                <Image
                  src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
                  width={600}
                  height={600}
                  layout="responsive"
                  alt="Braz Multimidia"
                />
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
                  <button className="text-gray-400 hover:text-white text-6xl p-2 rounded-2xl active:text-gray-400">
                    <MagnifyingGlassPlus />
                  </button>
                </div>
              </div>
              <div className="w-full relative rounded-md overflow-hidden">
                <Image
                  src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
                  width={600}
                  height={600}
                  layout="responsive"
                  alt="Braz Multimidia"
                />
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
                  <button className="text-gray-400 hover:text-white text-6xl p-2 rounded-2xl active:text-gray-400">
                    <MagnifyingGlassPlus />
                  </button>
                </div>
              </div>
              <div className="w-full relative rounded-md overflow-hidden">
                <Image
                  src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
                  width={600}
                  height={600}
                  layout="responsive"
                  alt="Braz Multimidia"
                />
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
                  <button className="text-gray-400 hover:text-white text-6xl p-2 rounded-2xl active:text-gray-400">
                    <MagnifyingGlassPlus />
                  </button>
                </div>
              </div>
              <div className="w-full relative rounded-md overflow-hidden">
                <Image
                  src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
                  width={600}
                  height={600}
                  layout="responsive"
                  alt="Braz Multimidia"
                />
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
                  <button className="text-gray-400 hover:text-white text-6xl p-2 rounded-2xl active:text-gray-400">
                    <MagnifyingGlassPlus />
                  </button>
                </div>
              </div>
              <div className="w-full relative rounded-md overflow-hidden">
                <Image
                  src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
                  width={600}
                  height={600}
                  layout="responsive"
                  alt="Braz Multimidia"
                />
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
                  <button className="text-gray-400 hover:text-white text-6xl p-2 rounded-2xl active:text-gray-400">
                    <MagnifyingGlassPlus />
                  </button>
                </div>
              </div>
              <div className="w-full relative rounded-md overflow-hidden">
                <Image
                  src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
                  width={600}
                  height={600}
                  layout="responsive"
                  alt="Braz Multimidia"
                />
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
                  <button className="text-gray-400 hover:text-white text-6xl p-2 rounded-2xl active:text-gray-400">
                    <MagnifyingGlassPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
}
