import { Truck } from "phosphor-react";
import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import HeadApp from "../components/layout/Head";
import Header from "../components/layout/Header";

export default function Shipping() {
  return (
    <Fragment>
      <HeadApp
        title="Fretes e Entrega | Braz Camiseteria, Uniforme Empresarial, Uniforme Esportivo, Uniforme
        Promocional, Abadás"
      />
      <Header />
      <div className="bg-gradient-to-b h-52 from-marinho-500 to-marinho-900 flex justify-center items-center flex-col px-5 text-white text-center">
        <Truck className="text-7xl" />
        <strong className="text-3xl mt-2">FRETES E ENTREGA</strong>
      </div>

      <section className="container mx-auto px-5 xl:px-0 max-w-4xl py-10">
        <article className="prose max-w-4xl text-justify lg:prose-lg">
          <h2>CÁLCULO DO VALOR DO FRETE</h2>
          <p>
            O cálculo do valor do frete está relacionado às dimensões e o peso
            do produto, a distância do local da entrega e a forma de entrega.
          </p>
          <p>
            O valor do frete é calculado durante a conversa com nossos
            consultores.
          </p>

          <h2>PRAZO DE ENTREGA</h2>

          <p>
            Atualmente nossos prazos são de 7 a 22 dias úteis para produção.
            Após o prazo de expedição, o pedido é enviado e o prazo de entrega
            dos correios ou transportadora escolhida, definido de acordo com o
            CEP informado e a opção de entrega selecionada, começa a ser
            contado. Além disso você também receberá uma notificação de nosso
            consultor com o código de rastreio para acompanhamento assim que seu
            pedido for enviado.
          </p>
        </article>
      </section>

      <Footer />
    </Fragment>
  );
}
