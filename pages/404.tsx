import Image from "next/image";
import Link from "next/link";
import { House } from "phosphor-react";
import { Fragment } from "react";
import Button from "../components/layout/Button";
import HeadApp from "../components/layout/Head";

export default function NotFound() {
  return (
    <Fragment>
      <HeadApp title="Página não encontrada" />
      <main className="w-screen h-screen flex flex-col justify-center items-center gap-4">
        <div className="w-full max-w-xs">
          <Image
            src="/img/logo.svg"
            width={115}
            height={50}
            alt="Braz Multimídia"
            layout="responsive"
          />
        </div>
        <span className="text-2xl">404, Página não encontrada</span>

        <Link href={"/"}>
          <Button scheme="warning">
            <House />
            Voltar para o início
          </Button>
        </Link>
      </main>
    </Fragment>
  );
}
