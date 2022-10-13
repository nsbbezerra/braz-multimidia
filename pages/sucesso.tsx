import { CircleWavyCheck, Copy, WhatsappLogo } from "phosphor-react";
import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import HeadApp from "../components/layout/Head";
import Header from "../components/layout/Header";

export default function Sucesso() {
  return (
    <Fragment>
      <HeadApp title="Pedido finalizado | Braz Multimidia" />
      <Header />
      <div className="bg-gradient-to-b h-52 from-green-400 to-green-700 flex justify-center items-center flex-col px-5 text-white text-center">
        <CircleWavyCheck className="text-7xl" />
        <strong className="text-3xl mt-2">PEDIDO FINALIZADO COM SUCESO!</strong>
      </div>

      <div className="container mx-auto px-5 xl:px-0 max-w-3xl mt-10 mb-10">
        <div className="flex items-center justify-center flex-col text-2xl text-center">
          <span>Este é o número do seu pedido:</span>
          <strong className="flex items-center gap-3 text-3xl text-orange-500">
            12301923789123{" "}
            <button className="rounded-full bg-gray-200 p-2 text-gray-900">
              <Copy />
            </button>
          </strong>

          <span className="mt-10">
            Agora copie o número do seu pedido e entre em contato conosco para
            proseguirmos para o pagamento, ou clique no botão abaixo para
            iniciar o atendimento via Whatsapp
          </span>

          <a className="mt-5 bg-green-600 text-white rounded-full py-3 px-5 flex items-center gap-4 cursor-pointer hover:bg-green-700 active:bg-green-600 select-none">
            <WhatsappLogo />
            Fale conosco agora
          </a>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
