import Image from "next/image";
import Link from "next/link";
import {
  CaretDown,
  House,
  IdentificationBadge,
  ImageSquare,
  List,
  Phone,
  ShoppingCart,
  Tag,
  TShirt,
} from "phosphor-react";
import { Fragment, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import Drawer from "./Drawer";

export default function Header() {
  const [openCart, setOpenCart] = useState<boolean>(false);

  const MenuItems = () => (
    <div className="flex items-center flex-col lg:flex-row gap-1 lg:gap-0">
      <Link href={"/"} passHref>
        <a className="menu-items">
          <House /> Início
        </a>
      </Link>
      <a className="menu-items">
        <IdentificationBadge /> Quem somos
      </a>
      <Popover.Root>
        <Popover.Trigger className="menu-items">
          <Tag /> Produtos <CaretDown />
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Portal>
          <Popover.Content className="Content-product lg:mt-9">
            <Link href={"/produtos"} passHref>
              <a className="menu-items-product">
                <TShirt />
                EMPRESAS
              </a>
            </Link>
            <Link href={"/produtos"} passHref>
              <a className="menu-items-product">
                <TShirt />
                EMPRESAS
              </a>
            </Link>
            <Link href={"/produtos"} passHref>
              <a className="menu-items-product">
                <TShirt />
                EMPRESAS
              </a>
            </Link>
            <Link href={"/produtos"} passHref>
              <a className="menu-items-product">
                <TShirt />
                EMPRESAS
              </a>
            </Link>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      <a className="menu-items">
        <ImageSquare /> Catálogos
      </a>
      <a className="menu-items">
        <Phone /> Fale conosco
      </a>
      <a className="menu-items-sim">
        <TShirt /> Simulador
      </a>
    </div>
  );

  return (
    <Fragment>
      <header className="w-full sticky top-0 min-h-fit shadow-md bg-white z-20">
        <div className="container mx-auto pl-5 lg:px-5 xl:px-0 max-w-6xl flex items-center justify-between h-16">
          <Link href={"/"} passHref>
            <a className="w-fit flex">
              <Image
                src="/img/logo.svg"
                width={115}
                height={50}
                alt="Braz Multimídia"
              />
            </a>
          </Link>

          <div className="hidden lg:flex">
            <MenuItems />
            <button
              className="w-16 h-16 bg-marinho-500 text-white flex justify-center items-center text-3xl relative hover:bg-marinho-700 active:bg-marinho-500"
              onClick={() => setOpenCart(!openCart)}
            >
              <ShoppingCart />
              <span className="w-5 h-5 bg-white text-marinho-500 flex items-center justify-center text-xs rounded-full absolute top-2 right-2">
                12
              </span>
            </button>
          </div>
          <div className="flex lg:hidden">
            <Popover.Root>
              <Popover.Trigger className="w-16 h-16 text-marinho-500 flex justify-center items-center text-3xl">
                <List />
              </Popover.Trigger>
              <Popover.Anchor />
              <Popover.Portal>
                <Popover.Content className="Content">
                  <MenuItems />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
            <button
              className="w-16 h-16 bg-marinho-500 text-white flex justify-center items-center text-3xl relative hover:bg-marinho-700 active:bg-marinho-500"
              onClick={() => setOpenCart(!openCart)}
            >
              <ShoppingCart />
              <span className="w-5 h-5 bg-white text-marinho-500 flex items-center justify-center text-xs rounded-full absolute top-2 right-2">
                12
              </span>
            </button>
          </div>
        </div>
      </header>

      <Drawer isOpen={openCart} items={[]} onClose={setOpenCart} />
    </Fragment>
  );
}
