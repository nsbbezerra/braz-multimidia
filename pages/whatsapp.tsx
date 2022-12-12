import { useRouter } from "next/router";
import { CircleNotch, WhatsappLogo } from "phosphor-react";
import { Fragment, useEffect } from "react";
import Footer from "../components/layout/Footer";
import HeadApp from "../components/layout/Head";
import Header from "../components/layout/Header";

export default function WhatsappPage() {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      push(
        `https://api.whatsapp.com/send?phone=556199116450&text=Olá Braz Multimídia, vim pelo site`
      );
    }, 2000);
  }, [push]);

  return (
    <Fragment>
      <HeadApp
        title="Whatsapp | Braz Camiseteria | Uniforme Empresarial, Uniforme Esportivo, Uniforme
        Promocional, Abadás"
      />
      <Header />

      <div className="bg-gradient-to-b h-52 from-marinho-500 to-marinho-900 flex justify-center items-center flex-col px-5 text-white text-center">
        <WhatsappLogo className="text-7xl" />
        <strong className="text-3xl mt-2">WHATSAPP</strong>
      </div>

      <div className="mx-auto px-5 xl:px-0 container max-w-3xl py-16 flex flex-col justify-center items-center">
        <CircleNotch className="text-7xl animate-spin" />
        <span>Iniciando o Whatsapp Web</span>
      </div>

      <Footer />
    </Fragment>
  );
}
