import Image from "next/image";
import Link from "next/link";

export default function Cards() {
  const MyCard = () => (
    <Link href={"/produtos"} passHref>
      <a className="card">
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
          <Link href={"/produtos"} passHref>
            <a className="card-action-button">VER PRODUTO</a>
          </Link>
        </div>
      </a>
    </Link>
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
