import { NextPage } from "next";
import Image from "next/image";
import { CaretDown, CaretRight, House, Tag, TShirt } from "phosphor-react";
import { Fragment } from "react";
import CardsProduct from "../../components/layout/CardProduct";
import Footer from "../../components/layout/Footer";
import HeadApp from "../../components/layout/Head";
import Header from "../../components/layout/Header";
import * as Popover from "@radix-ui/react-popover";
import Carousel from "../../components/layout/Carousel";
import Pedidos from "../../components/layout/Pedidos";

const Produtos: NextPage = () => {
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

  return (
    <Fragment>
      <HeadApp
        title="Camisetas | Braz Camiseteria | Uniforme Empresarial, Uniforme Esportivo, Uniforme
        Promocional, Abadás"
      />
      <Header />
      <div className="w-full relative">
        <Image
          src={"/img/produtos/banner.jpg"}
          width={1920}
          height={461}
          alt="Braz Multimidia banner"
          layout="responsive"
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

        <Carousel />

        <Pedidos />
      </section>

      <Footer />
    </Fragment>
  );
};

export default Produtos;
