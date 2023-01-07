import {
  Clock,
  Envelope,
  FacebookLogo,
  InstagramLogo,
  Link,
  WhatsappLogo,
} from "phosphor-react";
import { Fragment } from "react";
import NextLink from "next/link";

export default function Footer() {
  return (
    <Fragment>
      <NextLink href="/whatsapp" passHref>
        <a className="flex h-16 w-16 fixed bottom-5 right-5 z-50">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative rounded-full h-16 w-16 bg-green-600 flex items-center justify-center text-4xl text-white">
            <WhatsappLogo />
          </span>
        </a>
      </NextLink>
      <footer className="bg-marinho-800 pt-10 pb-5">
        <div className="container mx-auto px-5 xl:px-0 max-w-6xl border-b border-b-orange-500 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            <div>
              <strong className="text-2xl text-orange-500 font-bold block">
                INSTITUCIONAL
              </strong>

              <div className="mt-3 flex flex-col gap-2">
                <NextLink href={"/depoimentos"} passHref>
                  <a className="text-white flex items-center gap-2 cursor-pointer hover:underline">
                    <Link />
                    Depoimentos
                  </a>
                </NextLink>
                <a className="text-white flex items-center gap-2 cursor-pointer hover:underline">
                  <Link />
                  Onde estamos?
                </a>
                <NextLink href={"/freteseentregas"} passHref>
                  <a className="text-white flex items-center gap-2 cursor-pointer hover:underline">
                    <Link />
                    Fretes e entrega
                  </a>
                </NextLink>
              </div>
            </div>

            <div>
              <strong className="text-2xl text-orange-500 font-bold block">
                REDES SOCIAIS
              </strong>

              <div className="flex items-center gap-3 mt-3">
                <a className="flex items-center justify-center w-10 h-10 bg-white text-marinho-800 text-3xl rounded-full hover:bg-opacity-75 active:bg-opacity-100 cursor-pointer">
                  <InstagramLogo />
                </a>
                <a className="flex items-center justify-center w-10 h-10 bg-white text-marinho-800 text-3xl rounded-full hover:bg-opacity-75 active:bg-opacity-100 cursor-pointer">
                  <FacebookLogo />
                </a>
              </div>
            </div>

            <div>
              <strong className="text-2xl text-orange-500 font-bold block">
                PRECISA DE AJUDA?
              </strong>
              <div className="mt-3 flex flex-col gap-2">
                <a className="text-white flex items-center gap-2 cursor-pointer hover:underline">
                  <Link />
                  Fale conosco
                </a>
                <a className="text-white flex items-center gap-2 cursor-pointer hover:underline">
                  <Link />
                  Quem somos?
                </a>
                <NextLink href={"/minhascompras"} passHref>
                  <a className="text-white flex items-center gap-2 cursor-pointer hover:underline">
                    <Link />
                    Minhas compras
                  </a>
                </NextLink>
                <NextLink href={"/comocomprar"} passHref>
                  <a className="text-white flex items-center gap-2 cursor-pointer hover:underline">
                    <Link />
                    Como comprar?
                  </a>
                </NextLink>
              </div>
            </div>

            <div>
              <strong className="text-2xl text-orange-500 font-bold block">
                ATENDIMENTO
              </strong>
              <div className="mt-3 flex flex-col gap-2">
                <a className="text-white flex items-center gap-2 cursor-pointer hover:underline">
                  <WhatsappLogo />
                  (61) 99911-6450
                </a>
                <a className="text-white flex items-center gap-2 cursor-pointer hover:underline">
                  <Envelope />
                  brazmultimidia@gmail.com
                </a>
                <span className="text-white flex items-center gap-2">
                  <Clock />
                  8:00 - 18:00hrs de Segunda a Sexta
                </span>
                <span className="text-white flex items-center gap-2">
                  <Clock />
                  8:00 - 12:00hrs Sábado
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center mt-5 text-white px-5">
          © Braz Multimídia desde 2007 - Todos os direitos reservados
        </div>
      </footer>
    </Fragment>
  );
}
