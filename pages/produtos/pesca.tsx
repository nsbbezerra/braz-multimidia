import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Depoiments from "../../components/layout/Depoiments";
import Footer from "../../components/layout/Footer";
import HeadApp from "../../components/layout/Head";
import Header from "../../components/layout/Header";
import Pedidos from "../../components/layout/Pedidos";
import Specs from "../../components/layout/Specs";
import { configs } from "../../configs";

export default function Pesca() {
  return (
    <Fragment>
      <HeadApp
        title="Braz Camiseteria | Uniforme Empresarial, Uniforme Esportivo, Uniforme
        Promocional, Abadás"
      />
      <Header />
      <div className="w-full relative">
        <Image
          src={"/img/pesca/banner.jpg"}
          width={1731}
          height={634}
          alt="Palmieri Uniformes banner"
          layout="responsive"
        />
      </div>

      <div className="container mx-auto px-5 xl:px-0 max-w-5xl">
        <Specs origin="pesca" />
      </div>

      <div className="bg-backgroundPesca w-full pt-16 pb-32 bg-bottom bg-no-repeat px-10 flex justify-center items-center">
        <div className="w-full max-w-lg">
          <Image
            src={"/img/pesca/uniforme.png"}
            width={600}
            height={377}
            alt="Palmieri Uniformes banner"
            layout="responsive"
          />
        </div>
      </div>
      <div className="bg-gradient-to-t from-zinc-200 to-white py-10">
        <div className="container mx-auto px-5 xl:px-0 max-w-5xl">
          <div className="flex flex-col justify-center items-center gap-5 sm:flex-row sm:justify-between sm:items-center">
            <strong className="text-3xl sm:text-5xl text-zinc-700 text-center">
              SIMULADOR 24 HORAS
            </strong>
            <span className="sm:w-[50%] text-center font-semibold sm:text-lg md:text-xl text-zinc-700">
              CONHEÇA ESSA INCRÍVEL FERRAMENTA E CRIE VIRTUALMENTE O PRODUTO
              DESEJADO ANTECIPANDO A VISUALIZAÇÃO ANTES QUE SEJA FABRICADO.
            </span>
          </div>

          <div className="aspect-video mt-10 rounded-md overflow-hidden max-w-lg mx-auto">
            <iframe
              width="100%"
              height={"100%"}
              src="https://www.youtube.com/embed/4Gty5agrfhc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-12 max-w-4xl mx-auto">
            <div className="w-full">
              <Image
                src={"/img/pesca/sim-one.png"}
                width={600}
                height={600}
                alt="Palmieri Uniformes banner"
                layout="responsive"
              />
            </div>
            <div className="w-full">
              <Image
                src={"/img/pesca/sim-two.png"}
                width={600}
                height={600}
                alt="Palmieri Uniformes banner"
                layout="responsive"
              />
            </div>
            <div className="w-full">
              <Image
                src={"/img/pesca/sim-three.png"}
                width={600}
                height={600}
                alt="Palmieri Uniformes banner"
                layout="responsive"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Link href={configs.simulador} passHref>
              <a
                className="bg-orange-500 hover:bg-orange-600 active:bg-orange-500 px-10 py-4 text-white text-xl font-bold cursor-pointer rounded-md mt-10"
                target={"_blank"}
              >
                ACESSAR
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-10">
        <Pedidos />
      </div>

      <Depoiments />

      <Footer />
    </Fragment>
  );
}
