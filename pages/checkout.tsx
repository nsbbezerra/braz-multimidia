import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Minus,
  PaperPlane,
  Plus,
  ShoppingCart,
  Trash,
} from "phosphor-react";
import { Fragment, useContext, useEffect, useState } from "react";
import ReactInputMask from "react-input-mask";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";
import HeadApp from "../components/layout/Head";
import Header from "../components/layout/Header";
import CartContext from "../context/cart/cart";
import { FIND_CART_BANNER } from "../graphql/indexPage";
import { clientQuery } from "../lib/urql";
import { BannersProps } from "../types";

interface Props {
  banner: BannersProps | null;
}

const Checkout: NextPage<Props> = ({ banner }) => {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState<number>(0);
  const calcPrice = (price: number) => {
    let transform = price / 100;
    return transform.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const removeFromCart = (id: string) => {
    const result = cart.filter((obj) => obj.id !== id);
    setCart(result);
  };

  useEffect(() => {
    const sum = cart.reduce((a, b) => +a + +b.total, 0);
    setTotal(sum);
  }, [cart]);

  return (
    <Fragment>
      <HeadApp
        title="Checkou | Braz Camiseteria | Uniforme Empresarial, Uniforme Esportivo, Uniforme
        Promocional, Abadás"
      />
      <Header />
      {!banner ? (
        ""
      ) : (
        <>
          <div className="w-full relative hidden sm:block">
            <Image
              src={banner.desktop.url}
              width={1920}
              height={461}
              alt="Braz Multimidia banner"
              layout="responsive"
            />
          </div>
          <div className="w-full relative block sm:hidden">
            <Image
              src={banner.mobile.url}
              alt="Braz Multimidia"
              layout="responsive"
              width={550}
              height={775}
              objectFit="cover"
            />
          </div>
        </>
      )}

      <section className="mt-10 container mx-auto px-5 xl:px-0 max-w-3xl">
        <div className="flex gap-3 heading text-marinho-500 items-center border-b border-b-marinho-500">
          <ShoppingCart />
          MEU CARRINHO
        </div>

        {cart.length === 0 ? (
          <div className="flex justify-center items-center flex-col gap-1 mt-10">
            <Leaf className="text-6xl animate-bounce" />
            <span>Nada para mostrar</span>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 divide-y border rounded-md px-3 shadow">
            {cart.map((car) => (
              <div
                className="grid grid-cols-[80px_1fr] gap-5 items-start py-5"
                key={car.id}
              >
                <div className="w-full">
                  <Image
                    src={car.thumbnail}
                    width={600}
                    height={600}
                    layout="responsive"
                    alt="Braz Multimidia"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <strong>{car.name}</strong>
                    <span>{calcPrice(car.total)}</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p>{car.size}</p>
                      <p>Categoria: {car.category}</p>
                      <span className="flex items-center gap-5">
                        QTD: {car.quantity}
                      </span>
                    </div>
                    <Button
                      buttonSize="sm"
                      scheme="error"
                      variant="outline"
                      onClick={() => removeFromCart(car.id)}
                    >
                      <Trash />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3 mt-1">
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
          <div className="mt-1">
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
            <div className="flex justify-between py-2 items-center font-bold font-serif text-2xl px-5">
              <span>Total</span>
              <span>{calcPrice(total)}</span>
            </div>
            <div className="py-1">
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

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await clientQuery.query(FIND_CART_BANNER, {}).toPromise();

  return {
    props: {
      banner: data.banners[0] || null,
    },
    revalidate: 120,
  };
};
