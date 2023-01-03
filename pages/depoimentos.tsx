import Image from "next/image";
import { Chats } from "phosphor-react";
import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import HeadApp from "../components/layout/Head";
import Header from "../components/layout/Header";
import Depoiments from "../components/layout/Depoiments";

export default function Depoimentos() {
  return (
    <Fragment>
      <HeadApp
        title="Depoimentos | Braz Camiseteria, Uniforme Empresarial, Uniforme Esportivo, Uniforme
        Promocional, Abadás"
      />
      <Header />
      <div className="bg-gradient-to-b h-52 from-marinho-500 to-marinho-900 flex justify-center items-center flex-col px-5 text-white text-center">
        <Chats className="text-7xl" />
        <strong className="text-3xl mt-2">DEPOIMENTOS</strong>
      </div>

      <div className="container mx-auto px-5 xl:px-0 max-w-5xl py-12">
        <div className="w-full pb-10 flex flex-col items-center text-center">
          <strong className="text-marinho-500 heading font-bold font-serif">
            O QUE NOSSOS CLIENTES DIZEM SOBRE NÓS
          </strong>
          <span className="text-sm md:text-base">
            Veja o que nossos clientes falam sobre os nossos produtos,
            qualidade, atendimento e pontualidade
          </span>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5 md:gap-10">
          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/depo1.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={183}
            />
          </div>
          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/depo2.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={135}
            />
          </div>
          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/depo3.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={146}
            />
          </div>
          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/depo4.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={137}
            />
          </div>
          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/depo5.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={137}
            />
          </div>
          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/depo6.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={137}
            />
          </div>
          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/depo7.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={137}
            />
          </div>
          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/depo8.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={137}
            />
          </div>
          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/depo9.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={137}
            />
          </div>
          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/depo10.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={137}
            />
          </div>
          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/depo11.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={137}
            />
          </div>
          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/depo12.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={137}
            />
          </div>
        </section>
      </div>

      <Depoiments />

      <div className="container mx-auto px-5 xl:px-0 max-w-5xl py-12">
        <section className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-10">
          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/braz1.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={600}
            />
          </div>

          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/braz2.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={600}
            />
          </div>

          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/braz3.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={600}
            />
          </div>

          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/braz4.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={600}
            />
          </div>

          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/braz5.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={600}
            />
          </div>

          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/braz6.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={600}
            />
          </div>

          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/braz7.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={600}
            />
          </div>

          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/braz8.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={600}
            />
          </div>

          <div className="relative w-full h-fit rounded-md shadow overflow-hidden">
            <Image
              src={"/img/depoimentos/braz9.jpg"}
              alt="Depoimentos Braz Multimídia"
              layout="responsive"
              width={600}
              height={600}
            />
          </div>
        </section>
      </div>

      <Footer />
    </Fragment>
  );
}
