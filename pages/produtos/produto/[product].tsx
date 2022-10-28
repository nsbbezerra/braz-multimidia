import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { CaretRight, House, ShoppingCart, TShirt } from "phosphor-react";
import { Fragment, useState } from "react";
import Button from "../../../components/layout/Button";
import Footer from "../../../components/layout/Footer";
import HeadApp from "../../../components/layout/Head";
import Header from "../../../components/layout/Header";
import * as Tabs from "@radix-ui/react-tabs";
import Carousel from "../../../components/layout/Carousel";
import Pedidos from "../../../components/layout/Pedidos";
import { clientQuery } from "../../../lib/urql";
import {
  FIND_PRODUCTS_PATH,
  FIND_PRODUCT_INFORMATION,
} from "../../../graphql/products";
import { ProductInformationPageProps } from "../../../types";
import Link from "next/link";

interface ProductProps {
  id: string;
}

interface Props {
  information: ProductInformationPageProps;
}

const Produto: NextPage<Props> = ({ information }) => {
  const calcPrice = (price: number) => {
    let transform = price / 100;
    return transform.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const [quantity, setQuantity] = useState<number>(1);

  return (
    <Fragment>
      <HeadApp title={`${information.product?.name} | Braz Camiseteria`} />
      <Header />
      {!information.banners ? (
        ""
      ) : (
        <>
          <div className="w-full relative hidden sm:block">
            <Image
              src={information.banners.desktop.url}
              width={1920}
              height={461}
              alt="Braz Multimidia banner"
              layout="responsive"
            />
          </div>
          <div className="w-full relative block sm:hidden">
            <Image
              src={information.banners.mobile.url}
              alt="Braz Multimidia"
              layout="responsive"
              width={550}
              height={775}
              objectFit="cover"
            />
          </div>
        </>
      )}

      <section className="container mx-auto px-5 xl:px-0 max-w-6xl py-5">
        <div className="flex items-center gap-3">
          <Link href={"/"} passHref>
            <a className="flex items-center gap-2 cursor-pointer hover:underline">
              <House />
              Início
            </a>
          </Link>
          <CaretRight />
          <Link href={`/produtos/produto/${information.product?.id}`}>
            <a className="flex items-center gap-2 cursor-pointer hover:underline uppercase">
              <TShirt />
              {information.product?.name}
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[380px_1fr] gap-5 mt-5 justify-items-center">
          <div className="w-full rounded-md overflow-hidden h-fit max-w-sm">
            <Image
              src={information.product?.images[0].url || ""}
              width={600}
              height={600}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>

          <div>
            <strong className="heading text-marinho-500 block">
              {information.product?.name}
            </strong>
            <p className="md:text-lg mb-3">
              {information.product?.description}
            </p>
            <p>ID: {information.product?.id}</p>
            <p>
              Categoria:{" "}
              <Link
                href={`/produtos/${information.product?.categories[0].id}`}
                passHref
              >
                <a className="hover:underline cursor-pointer text-sky-700">
                  {information.product?.categories[0].name}
                </a>
              </Link>
            </p>

            <div className="flex justify-between sm:items-center mt-10 flex-col gap-5 sm:flex-row">
              <strong className="text-3xl block">
                {calcPrice(information.product?.price || 0)}
              </strong>

              <div className="flex flex-col sm:flex-row sm:items-end gap-3">
                <div className="flex flex-col">
                  <label htmlFor="qtd" className="mr-2 hidden sm:block">
                    Tamanho:
                  </label>
                  <select
                    className="border h-12 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-36 bg-transparent"
                    placeholder="Selecione um tamanho"
                  >
                    <option value={""}>Selecione um tamanho</option>
                    {information.productSizeVariants.map((size) => (
                      <option value={size.id} key={size.id}>
                        {size.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="qtd" className="mr-2 hidden sm:block">
                    QTD:
                  </label>
                  <input
                    id="qtd"
                    className="border h-12 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-20"
                    type={"number"}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                </div>
                <Button buttonSize="lg" scheme="warning">
                  <ShoppingCart />
                  Adicionar ao carrinho
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Tabs.Root className={"Root-tabs"} defaultValue="desc">
            <Tabs.List className={"List-tabs"} aria-label="tabs example">
              <Tabs.Trigger value="desc" className={"Trigger-tabs"}>
                DESCRIÇÃO
              </Tabs.Trigger>
              <Tabs.Trigger value="model" className={"Trigger-tabs"}>
                MODELAGEM
              </Tabs.Trigger>
              <Tabs.Trigger value="video" className={"Trigger-tabs"}>
                VÍDEO
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="desc" className={"Content-tabs"}>
              <div
                className="html-parsed"
                dangerouslySetInnerHTML={{
                  __html: information.product?.information?.html || "",
                }}
              />
            </Tabs.Content>
            <Tabs.Content value="model" className={"Content-tabs"}>
              <div className="w-full">
                <strong className="font-serif text-marinho-500 block w-full text-center">
                  COMO TIRAR SUAS MEDIDAS
                </strong>

                <div className="grid grid-cols-1 sm:grid-cols-3 container mx-auto max-w-3xl mt-5 items-start gap-5">
                  {information.product?.modelings.map((mod) => (
                    <div
                      className="w-full flex flex-col justify-center items-center"
                      key={mod.id}
                    >
                      <div className="w-3/4 max-w-[200px]">
                        <Image
                          src={mod.image.url}
                          alt="Modelagem svg"
                          layout="responsive"
                          width={400}
                          height={450}
                        />
                      </div>
                      <div className="p-2 text-center">
                        <strong>{mod.title}</strong>
                        <p>{mod.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 container mx-auto max-w-3xl mt-5 items-start gap-5">
                  {information.product?.measurements.map((mea) => (
                    <div
                      className="flex flex-col justify-center items-center"
                      key={mea.id}
                    >
                      <strong className="uppercase">{mea.title}</strong>
                      <div className="w-full max-w-sm">
                        <Image
                          src={mea.image.url}
                          alt="Modelagem svg"
                          layout="responsive"
                          width={400}
                          height={300}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content value="video" className={"Content-tabs"}>
              {!information.product?.video ? (
                ""
              ) : (
                <div className="w-full flex justify-center">
                  <iframe
                    className="aspect-video w-full rounded-md"
                    src={information.product.video}
                  />
                </div>
              )}
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <Pedidos />
      </section>

      <div className="bg-gray-50 w-full mt-10 py-10">
        <div className="flex items-center flex-col gap-2 mb-10 w-full">
          <span className="block heading text-marinho-500 text-center">
            CONFIRA A QUALIDADE DOS NOSSOS PRODUTOS
          </span>
          <div className="border-marinho-500 border-b-2 w-56" />
        </div>
        <div className="container mx-auto px-5 xl:px-0 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {information.portfolios.map((port) => (
            <div
              className="w-full rounded-md overflow-hidden shadow"
              key={port.id}
            >
              <Image
                src={port.image.url}
                width={626}
                height={417}
                layout="responsive"
                alt="Braz Multimidia"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Produto;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await clientQuery.query(FIND_PRODUCTS_PATH, {}).toPromise();

  const products: ProductProps[] = data.products;

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
    .query(FIND_PRODUCT_INFORMATION, { id })
    .toPromise();

  return {
    props: {
      information: {
        banners: data.banners[0] || null,
        product: data.product || null,
        productSizeVariants: data.productSizeVariants || [],
        portfolios: data.portfolios || [],
      },
    },
    revalidate: 60,
  };
};
