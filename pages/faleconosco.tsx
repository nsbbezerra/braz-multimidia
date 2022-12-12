import { NextPage } from "next";
import { Clock, Envelope, Phone, WhatsappLogo } from "phosphor-react";
import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import HeadApp from "../components/layout/Head";
import Header from "../components/layout/Header";

const Contact: NextPage = () => {
  return (
    <Fragment>
      <HeadApp
        title="Contato | Braz Camiseteria | Uniforme Empresarial, Uniforme Esportivo, Uniforme
        Promocional, Abadás"
      />
      <Header />
      <div className="bg-gradient-to-b h-52 from-marinho-500 to-marinho-900 flex justify-center items-center flex-col px-5 text-white text-center">
        <Phone className="text-7xl" />
        <strong className="text-3xl mt-2">FALE CONOSCO</strong>
      </div>
      <section className="py-10 container mx-auto max-w-5xl px-5 xl:px-0">
        <strong className="heading text-marinho-500">Onde estamos</strong>

        <div className="mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15350.058163681302!2d-48.0800549!3d-15.8820922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b78d6139019e60a!2sBraz%20Multim%C3%ADdia%20-%20Camiseteria!5e0!3m2!1spt-BR!2sbr!4v1643287585779!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            loading="lazy"
            className="aspect-video rounded-md shadow"
          ></iframe>
        </div>

        <strong className="heading text-marinho-500 block mt-10 mb-5">
          Braz Multimidia
        </strong>
        <a className="flex items-center gap-2 cursor-pointer hover:underline text-xl">
          <WhatsappLogo />
          (61) 99911-6450
        </a>
        <a className="flex items-center gap-2 cursor-pointer hover:underline text-xl">
          <Envelope />
          brazmultimidia@gmail.com
        </a>
        <span className="flex items-center gap-2 text-xl">
          <Clock />
          8:00 - 18:00hrs de Segunda a Sexta
        </span>
        <span className="flex items-center gap-2 text-xl">
          <Clock />
          8:00 - 12:00hrs Sábado
        </span>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Contact;
