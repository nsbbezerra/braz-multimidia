import { ShoppingCart } from "phosphor-react";
import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import HeadApp from "../components/layout/Head";
import Header from "../components/layout/Header";

export default function HowToBuy() {
  return (
    <Fragment>
      <HeadApp
        title="Como Comprar | Braz Camiseteria, Uniforme Empresarial, Uniforme Esportivo, Uniforme
        Promocional, Abadás"
      />
      <Header />
      <div className="bg-gradient-to-b h-52 from-marinho-500 to-marinho-900 flex justify-center items-center flex-col px-5 text-white text-center">
        <ShoppingCart className="text-7xl" />
        <strong className="text-3xl mt-2">COMO COMPRAR?</strong>
      </div>

      <section className="container mx-auto px-5 xl:px-0 max-w-4xl py-10">
        <article className="prose max-w-4xl text-justify lg:prose-lg">
          <h2>COMO COMPRAR</h2>

          <p>
            Comprar a Braz Multimidia é muito mais simples do que se pode
            imaginar!{" "}
          </p>

          <p>
            Seguindo os passos abaixo você notará que tudo foi pensado para
            facilitar a sua escolha, dando-lhe tantas alternativas, que sempre
            será possível encontrar aquilo que você procura. Mas, se você
            preferir tirar alguma dúvida por telefone, ligue para (61)
            99911-6450.
          </p>

          <h2>COMO LOCALIZAR UM PRODUTO </h2>

          <p>
            A qualquer momento da sua navegação pela loja, você encontrará
            facilmente as mercadorias que está procurando, pelos recursos
            disponibilizados na loja, a localização na nossa pagina inicial onde
            você verá todos os tipos de uniformes.{" "}
          </p>

          <h2>COMO COMPRAR NA LOJA </h2>

          <p>
            O critério utilizado na loja é pelo carrinho de compras, por
            simulador ou diretamente via whatsapp, nos tipos de uniformes
            (abada, ciclismo, times e pesca) você terá que montar o seu modelo
            nos nossos simuladores e especificar a quantidade de uniformes que
            vai precisar ou pode conversar diretamente com um dos nossos
            consultores e ver todos esses detalhes caso preferir.{" "}
          </p>

          <h2>COLOCANDO OS PRODUTOS NO CARRINHO </h2>

          <p>
            Nos tipos empresas, academia, operacional e eventos você terá que
            escolher o modelo da camiseta que vai querer e clicar em comprar,
            colocar a quantidade que está precisando desse modelo e clicar
            adicionar ao carrinho.{" "}
          </p>

          <h2>CONTINUAR COMPRANDO</h2>

          <p>
            Caso queira continuar comprando você será mantido na mesma página.
            Após inserir os produtos necessários no carrinho e desejar finalizar
            a compra, é preciso localizar o carrinho de compras da loja que pode
            estar no cabeçalho ou nas laterais da sua loja. Ao clicar no
            carrinho você será redirecionado para uma nova tela demonstrando a
            listagem dos produtos adicionados, onde você poderá verificar a
            quantidade e preços individuais de cada produto, e ainda alterar a
            quantidade de algum item. Você poderá também excluir um produto caso
            queira.{" "}
          </p>

          <h2>FINALIZAR O PEDIDO </h2>

          <p>
            Ao clicar em Finalizar Pedido no canto direito na parte de cima da
            tela, você será redirecionado para uma nova tela demonstrando a
            listagem de produtos que escolheu e adicionou no carrinho, onde você
            terá a opção de editar a sua compra caso seja necessário (Alterar
            quantidade, deletar algum item, etc...). Nesta página você fornecer
            algumas informações suas para um melhor atendimento e depois só
            clicar em enviar orçamento. Todas essas informações sobre os seus
            uniformes será enviado para um dos nossos consultores por mensagem
            diretamente via whatsapp onde será tirado qualquer tipo de dúvida e
            efetivando o seu pedido.
          </p>

          <h2>FINALIZAÇÃO DE COMPRA</h2>

          <p>
            A finalização da comprar é feito totalmente por via whatsapp com os
            nossos consultores, onde irão tirar todas as dúvidas sobre o pedido
            para que não aja nenhum equivoco e onde será feito o pagamento.
          </p>

          <h2>FORMA DE PAGAMENTO </h2>

          <p>
            Trabalhamos com 50% de entrada para início da fabricação e os outros
            50% ao término da mesma, transferência através da chave Pix, banco
            BTG Pactual e Nubank, também disponibilizamos boleto, para compras
            no cartão de crédito parcelamos em até 12x com juros.
          </p>
        </article>
      </section>

      <Footer />
    </Fragment>
  );
}
