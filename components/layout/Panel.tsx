import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Fragment } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import {
  CreditCard,
  CurrencyCircleDollar,
  CurrencyDollar,
  Money,
  PaintBrush,
  Truck,
} from "phosphor-react";

export default function Panel() {
  return (
    <Fragment>
      <Swiper navigation={true} modules={[Navigation]} autoplay>
        <SwiperSlide>
          <div className="w-full">
            <Image
              src={"/img/home/banner_one.jpg"}
              alt="Braz Multimidia"
              layout="responsive"
              width={1731}
              height={634}
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <Image
              src={"/img/home/banner_two.jpg"}
              alt="Braz Multimidia"
              layout="responsive"
              width={1731}
              height={634}
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <Image
              src={"/img/home/banner_three.jpg"}
              alt="Braz Multimidia"
              layout="responsive"
              width={1731}
              height={634}
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <Image
              src={"/img/home/banner_four.jpg"}
              alt="Braz Multimidia"
              layout="responsive"
              width={1731}
              height={634}
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="hidden md:block w-full h-16 bg-gradient-to-t from-white via-zinc-200 to-white">
        <div className="container max-w-6xl mx-auto px-5 xl:px-0 h-full grid grid-cols-4 gap-5">
          <div className="flex items-center gap-2 text-marinho-500 font-semibold">
            <CreditCard className="text-[60px]" />
            <span className="text-sm lg:text-base">
              Pague no Boleto ou Cartão de Crédito
            </span>
          </div>
          <div className="flex items-center gap-2 text-marinho-500 font-semibold">
            <Truck className="text-[60px]" />
            <span className="text-sm lg:text-base">
              Entregamos para todo o Brasil
            </span>
          </div>
          <div className="flex items-center gap-2 text-marinho-500 font-semibold">
            <CurrencyCircleDollar className="text-[60px]" />
            <span className="text-sm lg:text-base">
              Cobrimos 40% do valor do Frete
            </span>
          </div>
          <div className="flex items-center gap-2 text-marinho-500 font-semibold">
            <PaintBrush className="text-[60px]" />
            <span className="text-sm lg:text-base">
              Criamos sua arte 100% grátis
            </span>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center">
        <Image
          src="/img/home/shadow.png"
          width={1350}
          height={50}
          layout="fixed"
          alt="Braz Multimidia"
        />
      </div>
    </Fragment>
  );
}
