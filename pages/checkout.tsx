import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Minus, PaperPlane, Plus, ShoppingCart, Trash } from "phosphor-react";
import { Fragment } from "react";
import ReactInputMask from "react-input-mask";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";
import HeadApp from "../components/layout/Head";
import Header from "../components/layout/Header";

const Checkout: NextPage = () => {
  return (
    <Fragment>
      <HeadApp
        title="Checkou | Braz Camiseteria | Uniforme Empresarial, Uniforme Esportivo, Uniforme
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

      <section className="mt-10 container mx-auto px-5 xl:px-0 max-w-3xl">
        <div className="flex gap-3 heading text-marinho-500 items-center border-b border-b-marinho-500">
          <ShoppingCart />
          MEU CARRINHO
        </div>

        <div className="mt-10 grid grid-cols-1 divide-y border rounded-md px-3">
          <div className="grid grid-cols-[80px_1fr] gap-5 items-start py-5">
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
                  <span className="flex items-center gap-5">
                    QTD:{" "}
                    <div className="flex items-center gap-1">
                      <button className="bg-orange-500 rounded-full text-white p-1 hover:bg-orange-700 active:bg-orange-500">
                        <Minus />
                      </button>
                      <input
                        id="qtd"
                        className="border h-8 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-16"
                        type={"number"}
                      />
                      <button className="bg-orange-500 rounded-full text-white p-1 hover:bg-orange-700 active:bg-orange-500">
                        <Plus />
                      </button>
                    </div>
                  </span>
                </div>
                <Button buttonSize="sm" scheme="error" variant="outline">
                  <Trash />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-md py-3 px-5 mt-5 shadow">
          <span className="text-2xl font-bold">Insira seus dados</span>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <label htmlFor="name" className="block">
                Seu nome
              </label>
              <input
                id="name"
                className="border h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-full"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block">
                Seu whatsapp
              </label>
              <ReactInputMask
                mask="(99) 99999-9999"
                id="phone"
                className="border h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1">
            <div>
              <label htmlFor="email" className="block">
                Seu email
              </label>
              <input
                id="email"
                className="border h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-full"
              />
            </div>
            <div>
              <label htmlFor="city" className="block">
                Sua cidade
              </label>
              <input
                id="city"
                className="border h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-full"
              />
            </div>
            <div>
              <label htmlFor="state" className="block">
                Estado
              </label>
              <input
                id="state"
                className="border h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-full"
              />
            </div>
          </div>
          <div>
            <label htmlFor="state" className="block">
              Observações
            </label>
            <textarea
              id="state"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-full resize-none"
              rows={4}
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-md py-3 px-5 mt-5 mb-10 shadow">
          <div className="grid grid-cols-1">
            <div className="flex justify-between py-2 items-center font-bold text-2xl px-5">
              <span>Total</span>
              <span>R$ 40,00</span>
            </div>
            <div className="py-3">
              <Link href={"/sucesso"}>
                <Button buttonSize="lg" isFullSize>
                  <PaperPlane /> Enviar pedido
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Checkout;
