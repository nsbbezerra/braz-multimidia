import { NextPage } from "next";
import Image from "next/image";
import { CaretRight, House, ShoppingCart, TShirt } from "phosphor-react";
import { Fragment } from "react";
import Button from "../../../components/layout/Button";
import Footer from "../../../components/layout/Footer";
import HeadApp from "../../../components/layout/Head";
import Header from "../../../components/layout/Header";
import * as Tabs from "@radix-ui/react-tabs";
import Carousel from "../../../components/layout/Carousel";
import Pedidos from "../../../components/layout/Pedidos";

const Produto: NextPage = () => {
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

      <section className="container mx-auto px-5 xl:px-0 max-w-6xl py-5">
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

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[380px_1fr] gap-5 mt-5 justify-items-center">
          <div className="w-full rounded-md overflow-hidden h-fit max-w-sm">
            <Image
              src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
              width={600}
              height={600}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>

          <div>
            <strong className="heading text-marinho-500 block">
              BLUSA GOLA REDONDA PRETA
            </strong>
            <p className="md:text-lg mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>SKU: 129309</p>
            <p>
              Categoria:{" "}
              <a className="hover:underline cursor-pointer">Camisetas</a>
            </p>

            <div className="flex justify-between sm:items-center mt-10 flex-col gap-5 sm:flex-row">
              <strong className="text-3xl block">R$ 40,00</strong>

              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <label htmlFor="qtd" className="mr-2 hidden sm:block">
                    QTD:
                  </label>
                  <input
                    id="qtd"
                    className="border h-12 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-20"
                    type={"number"}
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
              <p>
                Vel fringilla est ullamcorper eget nulla. Eu feugiat pretium
                nibh ipsum consequat nisl vel pretium lectus. Id aliquet lectus
                proin nibh nisl condimentum id venenatis a. Morbi tempus iaculis
                urna id volutpat lacus laoreet non curabitur. Amet volutpat
                consequat mauris nunc congue. Interdum velit laoreet id donec.
                Rhoncus aenean vel elit scelerisque mauris pellentesque.
                Placerat vestibulum lectus mauris ultrices eros in cursus turpis
                massa. Eget aliquet nibh praesent tristique magna sit amet. Leo
                vel orci porta non pulvinar neque laoreet suspendisse. Sed risus
                pretium quam vulputate dignissim suspendisse in. Quis hendrerit
                dolor magna eget. Venenatis lectus magna fringilla urna.
                Elementum sagittis vitae et leo duis. Fringilla urna porttitor
                rhoncus dolor purus non enim praesent elementum.
              </p>
              <p>
                Leo vel fringilla est ullamcorper eget nulla. Morbi tristique
                senectus et netus. Ut tristique et egestas quis ipsum. Massa
                tincidunt dui ut ornare lectus sit amet est placerat. Etiam
                dignissim diam quis enim lobortis scelerisque fermentum dui
                faucibus. Aenean vel elit scelerisque mauris pellentesque
                pulvinar pellentesque habitant. Scelerisque eu ultrices vitae
                auctor eu. Condimentum lacinia quis vel eros donec ac odio
                tempor. Facilisi cras fermentum odio eu feugiat pretium. Ac
                felis donec et odio pellentesque diam volutpat commodo. Vitae
                suscipit tellus mauris a. Eu non diam phasellus vestibulum lorem
                sed risus. Risus nullam eget felis eget nunc lobortis mattis
                aliquam.
              </p>
            </Tabs.Content>
            <Tabs.Content value="model" className={"Content-tabs"}>
              <div className="w-full">
                <strong className="font-serif text-marinho-500 block w-full text-center">
                  COMO TIRAR SUAS MEDIDAS
                </strong>

                <div className="grid grid-cols-1 sm:grid-cols-3 container mx-auto max-w-3xl mt-5 items-start gap-5">
                  <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-3/4 max-w-[200px]">
                      <Image
                        src={"/img/produtos/modeling-one.svg"}
                        alt="Modelagem svg"
                        layout="responsive"
                        width={400}
                        height={450}
                      />
                    </div>
                    <div className="p-2 text-center">
                      <strong>Altura</strong>
                      <p>
                        Use uma roupa sua semelhante àquela que você quer
                        comprar. Coloque-a esticada sobre uma superfície plana.
                        Meça o comprimento total.
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-3/4 max-w-[200px]">
                      <Image
                        src={"/img/produtos/modeling-two.svg"}
                        alt="Modelagem svg"
                        layout="responsive"
                        width={400}
                        height={450}
                      />
                    </div>
                    <div className="p-2 text-center">
                      <strong>Manga</strong>
                      <p>
                        Use uma peça sua como referência, similar àquela que
                        você quer comprar. Meça da costura do ombro ao final do
                        punho.
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-3/4 max-w-[200px]">
                      <Image
                        src={"/img/produtos/modeling-three.svg"}
                        alt="Modelagem svg"
                        layout="responsive"
                        width={400}
                        height={450}
                      />
                    </div>
                    <div className="p-2 text-center">
                      <strong>Cintura</strong>
                      <p>
                        Pare com os pés juntos. Em seguida, meça a parte mais
                        estreita do corpo entre o peito e o quadril.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 container mx-auto max-w-3xl mt-5 items-start gap-5">
                  <div className="flex flex-col justify-center items-center">
                    <strong>MODELO MASCULINO</strong>
                    <div className="w-full max-w-sm">
                      <Image
                        src={"/img/produtos/table-mas.svg"}
                        alt="Modelagem svg"
                        layout="responsive"
                        width={400}
                        height={300}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <strong>MODELO FEMININO</strong>
                    <div className="w-full max-w-sm">
                      <Image
                        src={"/img/produtos/table-fem.svg"}
                        alt="Modelagem svg"
                        layout="responsive"
                        width={400}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content value="video" className={"Content-tabs"}>
              <div className="w-full flex justify-center">
                <iframe
                  className="aspect-video w-full rounded-md"
                  src="https://www.youtube.com/embed/nUDgxx2RzX4"
                />
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className="flex items-center flex-col gap-2 mt-16 w-full">
          <span className="block heading text-marinho-500 text-center">
            CATÁLOGOS DE MODELOS PRONTOS
          </span>
          <div className="border-marinho-500 border-b-2 w-56" />
        </div>

        <Carousel catalogs={null} category={null} />

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
          <div className="w-full rounded-md overflow-hidden shadow">
            <Image
              src="https://img.freepik.com/vetores-premium/uniforme-de-futebol-azul-e-branco_23-2148616091.jpg"
              width={626}
              height={417}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>
          <div className="w-full rounded-md overflow-hidden shadow">
            <Image
              src="https://img.freepik.com/vetores-premium/uniforme-de-futebol-azul-e-branco_23-2148616091.jpg"
              width={626}
              height={417}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>
          <div className="w-full rounded-md overflow-hidden shadow">
            <Image
              src="https://img.freepik.com/vetores-premium/uniforme-de-futebol-azul-e-branco_23-2148616091.jpg"
              width={626}
              height={417}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>
          <div className="w-full rounded-md overflow-hidden shadow">
            <Image
              src="https://img.freepik.com/vetores-premium/uniforme-de-futebol-azul-e-branco_23-2148616091.jpg"
              width={626}
              height={417}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>
          <div className="w-full rounded-md overflow-hidden shadow">
            <Image
              src="https://img.freepik.com/vetores-premium/uniforme-de-futebol-azul-e-branco_23-2148616091.jpg"
              width={626}
              height={417}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>
          <div className="w-full rounded-md overflow-hidden shadow">
            <Image
              src="https://img.freepik.com/vetores-premium/uniforme-de-futebol-azul-e-branco_23-2148616091.jpg"
              width={626}
              height={417}
              layout="responsive"
              alt="Braz Multimidia"
            />
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Produto;
