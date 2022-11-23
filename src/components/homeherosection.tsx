import { FC, useRef, useEffect } from "react";
import { Autoplay, Controller, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import ButtonOutline from "./buttonoutline";
import homehero1 from "../../public/images/homehero1.jpeg";
import homehero2 from "../../public/images/homehero2.jpeg";

const heroBanner = [
  {
    content:
      "PT Surya Fajar Capital Tbk didirikan pada tahun 2016, Perseroan bergerak di bidang jasa konsultasi keuangan dan investasi dengan tujuan memberikan solusi dan nilai tambah terbaik bagi setiap kebutuhan-kebutuhan klien korporasi kami",
    img: homehero1,
  },
  {
    content:
      "Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.",
    img: homehero2,
  },
  {
    content:
      "Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.",
    img: homehero2,
  },
  {
    content:
      "Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.",
    img: homehero2,
  },
];

const HomeHeroSection: FC = () => {
  const swiperBackground = useRef<any>();
  const swiperHeadline = useRef<any>();
  useEffect(() => {
    swiperBackground.current.controller.control = swiperHeadline.current;
    swiperHeadline.current.controller.control = swiperBackground.current;
  }, []);
  return (
    <section className="relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperBackground.current = swiper;
        }}
        autoplay={{ delay: 4000 }}
        speed={1500}
        modules={[Autoplay, Controller]}
        direction="horizontal"
        slidesPerView={1}
        className="min-h-screen max-h-screen w-full group"
      >
        {heroBanner.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="relative w-full min-h-screen after:absolute after:bg-gradient-to-l after:from-black/80 after:opacity-60 after:group-hover:opacity-100 after:to-black/0 after:inset-0 after:w-full after:h-full after:transition-opacity duration-1000"
            >
              <Image
                src={item.img}
                alt=""
                fill
                priority
                className="object-cover bg-contain"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="absolute max-w-6xl w-full z-[2] top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 flex flex-row-reverse">
        <div className="p-4 basis-full md:basis-1/2 flex flex-col text-white overflow-clip">
          <div
            className="w-full mb-4 flex space-x-2"
            id="custom-pagination"
          ></div>
          <div className="font-bold text-4xl mb-4">
            PT Surya Fajar Capital Tbk
          </div>
          <div className="font-light text-justify">
            <Swiper
              onSwiper={(swiper) => {
                swiperHeadline.current = swiper;
              }}
              modules={[Autoplay, Controller, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{
                el: "#custom-pagination",
                type: "bullets",
                bulletActiveClass: "w-12 bg-white/100",
                bulletClass:
                  "rounded-full transition-all duration-1000 h-2 w-6 bg-gray-300",
                clickable: true,
              }}
            >
              {heroBanner.map((item, index) => {
                return <SwiperSlide key={index}>{item.content}</SwiperSlide>;
              })}
            </Swiper>
          </div>
          <div className="mt-4">
            <ButtonOutline href="#">Hubungi Kami</ButtonOutline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
