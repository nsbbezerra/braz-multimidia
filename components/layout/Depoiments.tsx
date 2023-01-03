import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import { comments } from "../data/comments";

export default function Depoiments() {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto px-5 xl:px-0 max-w-5xl">
        <strong className="text-center text-3xl text-marinho-500 w-full block mb-5">
          DEPOIMENTOS
        </strong>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="slider"
          breakpoints={{
            670: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {comments.map((comm) => (
            <SwiperSlide className="pb-10" key={comm._id}>
              <div className="flex justify-center items-center flex-col w-full">
                <div className="rounded-md bg-white shadow px-4 pt-5 h-52 w-full relative text-center text-lg">
                  {comm.text}
                </div>
                <div className="w-16 z-10 rounded-full overflow-hidden border-2 border-marinho-500 -mt-8">
                  <Image
                    src={`/img/avatar.png`}
                    width={300}
                    height={300}
                    alt="Braz Multimidia banner"
                    layout="responsive"
                  />
                </div>
                <div className="text-center font-semibold text-marinho-500">
                  {comm.author}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
