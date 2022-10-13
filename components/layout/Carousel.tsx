import Image from "next/image";
import { CaretLeft, CaretRight } from "phosphor-react";
import { Fragment, useRef } from "react";

export default function Carousel() {
  const carousel = useRef<HTMLDivElement>(null);

  const handeLeftClick = (e: any) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current?.offsetWidth || 0;
    }
  };

  const handeRightClick = (e: any) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current?.offsetWidth || 0;
    }
  };

  return (
    <Fragment>
      <div className="mt-5 container mx-auto max-w-6xl carousel" ref={carousel}>
        <div className="carousel-item">
          <Image
            src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
            width={600}
            height={600}
            layout="responsive"
            alt="Braz Multimidia"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
            width={600}
            height={600}
            layout="responsive"
            alt="Braz Multimidia"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
            width={600}
            height={600}
            layout="responsive"
            alt="Braz Multimidia"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
            width={600}
            height={600}
            layout="responsive"
            alt="Braz Multimidia"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
            width={600}
            height={600}
            layout="responsive"
            alt="Braz Multimidia"
          />
        </div>

        <div className="carousel-item">
          <Image
            src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
            width={600}
            height={600}
            layout="responsive"
            alt="Braz Multimidia"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
            width={600}
            height={600}
            layout="responsive"
            alt="Braz Multimidia"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
            width={600}
            height={600}
            layout="responsive"
            alt="Braz Multimidia"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
            width={600}
            height={600}
            layout="responsive"
            alt="Braz Multimidia"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://www.brazmultimidia.com.br/_next/image?url=http%3A%2F%2Fpalmieriuniformes.nodejsng36f02.kinghost.net%3A21045%2Fimg%2F05-1643145668522.png&w=1380&q=75"
            width={600}
            height={600}
            layout="responsive"
            alt="Braz Multimidia"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 justify-center mt-3">
        <button
          className="flex items-center gap-1 hover:underline"
          onClick={handeLeftClick}
        >
          <CaretLeft />
          Anterior
        </button>
        <button
          className="flex items-center gap-1 hover:underline"
          onClick={handeRightClick}
        >
          Próxima
          <CaretRight />
        </button>
      </div>
      <div className="flex justify-center">
        <a className="card-action-button-orange w-fit px-4 mt-5">
          VEJA O CATÁLOGO COMPLETO
        </a>
      </div>
    </Fragment>
  );
}
