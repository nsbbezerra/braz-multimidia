import type { NextPage } from "next";
import Image from "next/image";
import { CircleWavyCheck } from "phosphor-react";
import { Fragment } from "react";
import Cards from "../components/layout/Cards";
import HeadApp from "../components/layout/Head";
import Header from "../components/layout/Header";
import Panel from "../components/layout/Panel";

const Home: NextPage = () => {
  return (
    <Fragment>
      <HeadApp
        title="Braz Camiseteria | Uniforme Empresarial, Uniforme Esportivo, Uniforme
        Promocional, Abadás"
      />
      <Header />
      <Panel />
      <section className="py-12 container mx-auto px-5 xl:px-0 max-w-6xl">
        <div className="flex gap-5 items-center justify-center">
          <div className="rounded-md overflow-hidden shadow max-w-lg h-fit w-full">
            <a className="cursor-pointer">
              <Image
                src="/img/home/sim_one.jpg"
                width={713}
                height={449}
                layout="responsive"
                alt="Braz Multimidia"
              />
            </a>
          </div>
          <div className="rounded-md overflow-hidden shadow max-w-lg h-fit w-full">
            <a className="cursor-pointer">
              <Image
                src="/img/home/sim_two.jpg"
                width={713}
                height={449}
                layout="responsive"
                alt="Braz Multimidia"
              />
            </a>
          </div>
        </div>

        <div className="w-full py-12 flex flex-col items-center text-center">
          <strong className="text-marinho-500 text-3xl md:text-4xl font-extrabold">
            VEJA NOSSOS MODELOS
          </strong>
          <span className="text-sm md:text-base">
            Uniformes para diferentes utilidades, escolha o que melhor lhe
            atender
          </span>
        </div>
        <Cards />
      </section>

      <section className="py-10 bg-gradient-to-r from-marinho-500 to-rose-700 relative hidden lg:block border-b-2 border-b-orange-500">
        <div className="container mx-auto px-5 max-w-6xl xl:px-0">
          <div className="rounded-md relative mt-20 xl:mt-16">
            <div className="overflow-hidden rounded-md">
              <Image
                src="/img/home/jumbo_bg.jpg"
                width={1628}
                height={308}
                layout="responsive"
                alt="Braz Multimidia"
                quality={100}
              />
            </div>

            <div className="grid grid-cols-[200px_1fr] z-10 absolute bottom-0 px-10 items-end gap-5">
              <div className="w-[200px]">
                <Image
                  src="/img/home/jumbo_one.png"
                  width={297}
                  height={427}
                  layout="responsive"
                  alt="Braz Multimidia"
                  quality={100}
                />
              </div>

              <div className="p-5">
                <strong className="text-yellow-200 font-black text-6xl xl:text-7xl block">
                  SIMULADOR 24 HORAS
                </strong>
                <div className="flex items-center gap-10 mt-5">
                  <div className="flex items-center gap-3 text-2xl font-bold text-white">
                    <CircleWavyCheck />
                    <span>MOBILE</span>
                  </div>
                  <div className="flex items-center gap-3 text-2xl font-bold text-white">
                    <CircleWavyCheck />
                    <span>DESKTOP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full relative py-16 bg-marinho-500 bg-jumbotronIndex bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-5 xl:px-0 max-w-6xl text-center text-white text-xl font-bold">
          <strong className="text-white font-black text-3xl text-center w-full block mb-10">
            QUEM SOMOS
          </strong>

          <p className="mb-5">
            A Braz Multimídia é uma empresa especializada na fabricação e
            comercialização de uniformes.
          </p>
          <p className="mb-5">
            Com fábricas situadas na região de Brasília - DF, a Braz Multimídia
            atua em todo o território brasileiro e veste diversas empresas,
            eventos, times, alunos e etc, no país.
          </p>
          <p className="mb-96">
            A qualidade estampada em nossos produtos é resultado de um constante
            trabalho de pesquisa que busca inovações, tecnologias e tendências
            do mercado, para que, interagindo com os clientes, possamos oferecer
            o que há de melhor em uniformes e personalizados no Brasil.
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
