import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ShoppingCart, Trash, X } from "phosphor-react";
import Button from "./Button";

interface Props {
  isOpen: boolean;
  items: any;
  onClose: (data: boolean) => void;
}

export default function Drawer({ isOpen, items, onClose }: Props) {
  return (
    <div
      className={`fixed bg-black bg-opacity-50 right-0 left-0 bottom-0 top-0 ${
        isOpen ? "ml-0" : "-ml-[-100%]"
      } z-40 transition-all delay-200 flex justify-end`}
    >
      <div className="bg-white h-full w-full max-w-xs sm:max-w-md shadow-xl shadow-black relative max-h-[100%]">
        <div className="overflow-auto pb-24 h-full max-h-full">
          <div className="p-3 flex items-center justify-between bg-orange-500 text-white sticky top-0 z-10">
            <div className="flex items-center gap-3 font-bold">
              <ShoppingCart />
              MEU CARRINHO
            </div>
            <button className="text-xl" onClick={() => onClose(false)}>
              <X />
            </button>
          </div>

          <div className="px-4 py-2">
            <div className="grid grid-cols-1 divide-y">
              <div className="grid grid-cols-[80px_1fr] gap-5 items-start py-2">
                <div className="w-full">
                  <Image
                    src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
                    width={600}
                    height={600}
                    layout="responsive"
                    alt="Braz Multimidia"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <strong>CAMISETA MANGA LONGA</strong>
                    <span>R$ 40,00</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p>Tamanho: P</p>
                      <p>QTD: 1</p>
                    </div>
                    <Button buttonSize="sm" scheme="error" variant="outline">
                      <Trash />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-2 border-t absolute bottom-0 right-0 left-0 bg-white">
          <div className="flex items-center justify-between mb-2 px-2 font-serif text-xl font-bold">
            <span>Total</span>
            <span>R$ 40,00</span>
          </div>
          <Link href={"/checkout"}>
            <Button isFullSize buttonSize="lg">
              <ShoppingBag />
              Finalizar pedido
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
