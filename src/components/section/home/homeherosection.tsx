import { FC, useRef, useEffect } from "react";
import { Autoplay, Controller, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import LinkBtnOutline from "../../linkbtnoutline";
import homehero1 from "../../../../public/images/homehero1.jpeg";
import homehero2 from "../../../../public/images/homehero2.jpeg";

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
        autoplay={{ delay: 5000 }}
        speed={1500}
        modules={[Autoplay, Controller]}
        direction="horizontal"
        slidesPerView={1}
        className="group max-h-screen min-h-screen w-full"
      >
        {heroBanner.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="duration-2000 relative min-h-screen w-full after:absolute after:inset-0 after:h-full after:w-full after:bg-gradient-to-l after:from-black/80 after:to-black/0 after:opacity-60 after:transition-opacity after:group-hover:opacity-100"
            >
              <Image
                src={item.img}
                alt=""
                fill
                priority
                className="bg-contain object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="absolute top-1/2 left-1/2 z-[2] flex w-full max-w-6xl -translate-y-1/2 -translate-x-1/2 flex-row-reverse">
        <div className="flex basis-full flex-col overflow-clip p-4 text-white md:basis-1/2">
          <div
            className="mb-4 flex w-full space-x-2"
            id="custom-pagination"
          ></div>
          <div className="mb-4 text-[40px] font-bold">
            PT Surya Fajar Capital Tbk
          </div>
          <div className="text-justify font-light">
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
                bulletClass: "swiper-bullet",
                bulletActiveClass: "swiper-bullet-active",
                clickable: true,
              }}
            >
              {heroBanner.map((item, index) => {
                return <SwiperSlide key={index}>{item.content}</SwiperSlide>;
              })}
            </Swiper>
          </div>
          <div className="mt-4">
            <LinkBtnOutline href="#">Hubungi Kami</LinkBtnOutline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
