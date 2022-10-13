import { NextPage } from "next";
import Image from "next/image";
import {
  CaretDown,
  CaretLeft,
  CaretRight,
  House,
  Package,
  Tag,
  Truck,
  TShirt,
} from "phosphor-react";
import { Fragment, useRef } from "react";
import CardsProduct from "../../components/layout/CardProduct";
import Footer from "../../components/layout/Footer";
import HeadApp from "../../components/layout/Head";
import Header from "../../components/layout/Header";
import * as Popover from "@radix-ui/react-popover";

const Produtos: NextPage = () => {
  const carousel = useRef<HTMLDivElement>(null);

  const Items = () => (
    <div className="p-1 flex flex-col gap-1">
      <a className="flex w-full items-center gap-2 text-marinho-500 font-semibold h-8 rounded-md hover:bg-marinho-500 hover:text-white active:bg-marinho-600 select-none px-4 cursor-pointer focus:outline-none focus:bg-marinho-500 focus:text-white">
        <Tag />
        CAMISA MANGA LONGA
      </a>
      <a className="flex w-full items-center gap-2 text-marinho-500 font-semibold h-8 rounded-md hover:bg-marinho-500 hover:text-white active:bg-marinho-600 select-none px-4 cursor-pointer focus:outline-none focus:bg-marinho-500 focus:text-white">
        <Tag />
        CAMISA MANGA LONGA
      </a>
      <a className="flex w-full items-center gap-2 text-marinho-500 font-semibold h-8 rounded-md hover:bg-marinho-500 hover:text-white active:bg-marinho-600 select-none px-4 cursor-pointer focus:outline-none focus:bg-marinho-500 focus:text-white">
        <Tag />
        CAMISA MANGA LONGA
      </a>
      <a className="flex w-full items-center gap-2 text-marinho-500 font-semibold h-8 rounded-md hover:bg-marinho-500 hover:text-white active:bg-marinho-600 select-none px-4 cursor-pointer focus:outline-none focus:bg-marinho-500 focus:text-white">
        <Tag />
        CAMISA MANGA LONGA
      </a>
      <a className="flex w-full items-center gap-2 text-marinho-500 font-semibold h-8 rounded-md hover:bg-marinho-500 hover:text-white active:bg-marinho-600 select-none px-4 cursor-pointer focus:outline-none focus:bg-marinho-500 focus:text-white">
        <Tag />
        CAMISA MANGA LONGA
      </a>
    </div>
  );

  const handeLeftClick = (e: any) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current?.offsetWidth || 0;
    }
  };

  const handeRightClick = (e: any) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current?.offsetWidth || 0;
    }
  };

  return (
    <Fragment>
      <HeadApp title="Camisetas | Braz Multimídia" />
      <Header />
      <div className="w-full relative">
        <Image
          src={"/img/produtos/banner.jpg"}
          width={1920}
          height={461}
          alt="Braz Multimidia banner"
        />
      </div>

      <section className="container mx-auto px-5 xl:px-0 max-w-7xl py-5">
        <div className="flex items-center gap-3">
          <a className="flex items-center gap-2 cursor-pointer hover:underline">
            <House />
            Início
          </a>
          <CaretRight />
          <a className="flex items-center gap-2 cursor-pointer hover:underline">
            <TShirt />
            EMPRESAS
          </a>
        </div>

        <div className="w-fit">
          <Popover.Root>
            <Popover.Trigger className="flex gap-3 bg-orange-500 text-white items-center py-2 px-3 font-semibold text-lg lg:hidden mt-5 rounded-md">
              <TShirt /> EMPRESAS <CaretDown />
            </Popover.Trigger>
            <Popover.Anchor />
            <Popover.Portal>
              <Popover.Content className="Content-drop">
                <Items />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 mt-5">
          <div className="hidden lg:block border rounded-md overflow-hidden shadow h-fit">
            <div className="flex gap-3 bg-orange-500 text-white items-center py-2 px-3 font-semibold text-lg">
              <TShirt />
              EMPRESAS
            </div>

            <Items />
          </div>
          <div>
            <CardsProduct />
          </div>
        </div>

        <div className="flex items-center flex-col gap-2 mt-16 w-full">
          <span className="block text-3xl font-extrabold text-marinho-500 font-serif text-center">
            CATÁLOGOS DE MODELOS PRONTOS
          </span>
          <div className="border-marinho-500 border-b-2 w-56" />
        </div>

        <div
          className="mt-5 container mx-auto max-w-6xl carousel"
          ref={carousel}
        >
          <div className="carousel-item">
            <Image
              src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
              width={600}
              height={600}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
              width={600}
              height={600}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
              width={600}
              height={600}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
              width={600}
              height={600}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
              width={600}
              height={600}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>

          <div className="carousel-item">
            <Image
              src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
              width={600}
              height={600}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
              width={600}
              height={600}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
              width={600}
              height={600}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
              width={600}
              height={600}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
              width={600}
              height={600}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>
        </div>
        <div className="flex items-center gap-5 justify-center mt-3">
          <button
            className="flex items-center gap-1 hover:underline"
            onClick={handeLeftClick}
          >
            <CaretLeft />
            Anterior
          </button>
          <button
            className="flex items-center gap-1 hover:underline"
            onClick={handeRightClick}
          >
            Próxima
            <CaretRight />
          </button>
        </div>

        <div className="flex justify-center">
          <a className="card-action-button-orange w-fit px-4 mt-5">
            VEJA O CATÁLOGO COMPLETO
          </a>
        </div>

        <div className="flex items-center flex-col gap-2 mt-16 w-full">
          <span className="block text-3xl font-extrabold text-marinho-500 font-serif text-center">
            PEDIDOS E PRAZOS
          </span>
          <div className="border-marinho-500 border-b-2 w-36" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 mt-10 w-full container mx-auto max-w-4xl mb-10">
          <div className="flex gap-5 border-4 border-marinho-500 rounded-md p-4">
            <div className="text-7xl w-full flex items-center justify-center text-marinho-500">
              <Truck />
            </div>
            <div>
              <strong className="font-serif text-lg text-marinho-500 block">
                Produção e Entrega
              </strong>
              <span className="block">
                O Tempo médio de produção de camisa de time é de 20 á 22 Dias
                úteis. Para sua comodidade nós enviamos nossos produtos para
                Todo Brasil.
              </span>
            </div>
          </div>
          <div className="flex gap-5 border-4 border-marinho-500 rounded-md p-4">
            <div className="text-7xl w-full flex items-center justify-center text-marinho-500">
              <Package />
            </div>
            <div>
              <strong className="font-serif text-lg text-marinho-500 block">
                Pedido mínimo
              </strong>
              <span className="block">
                A Quantidade mínima por pedido de uniformes personalizados são
                de 30 unidades. Conseguimos atender pedidos de grande porte com
                entrega rápida.
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Produtos;
