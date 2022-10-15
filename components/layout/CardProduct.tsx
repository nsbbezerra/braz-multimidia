import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "phosphor-react";

export default function CardsProduct() {
  const MyCard = () => (
    <div className="card">
      <div>
        <Image
          src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
          width={600}
          height={600}
          layout="responsive"
          alt="Braz Multimidia"
        />
      </div>
      <div className="p-2 md:p-4">
        <strong className="text-center text-sm sm:text-base font-extrabold w-full block">
          EMPRESAS
        </strong>

        <strong className="text-center text-sm sm:text-base w-full block font-light">
          R$ 40,00
        </strong>

        <Link href={"/produtos/produto"} passHref>
          <a className="card-action-button-orange">
            <ShoppingCart /> COMPRAR
          </a>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
    </div>
  );
}
