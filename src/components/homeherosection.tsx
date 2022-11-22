import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import homehero1 from "../../public/images/homehero1.jpeg";
import homehero2 from "../../public/images/homehero2.jpeg";

const HomeHeroSection: FC = () => {
  return (
    <section className="relative">
      <Swiper
        loop
        direction="horizontal"
        slidesPerView={1}
        className="min-h-screen max-h-screen w-full"
      >
        <SwiperSlide className="relative w-full min-h-screen after:absolute after:bg-gradient-to-l after:from-black/80 after:to-black/0 after:inset-0 after:w-full after:h-full">
          <Image
            src={homehero1}
            alt=""
            fill
            className="object-cover bg-contain"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full min-h-screen after:absolute after:bg-gradient-to-l after:from-black/80 after:to-black/0 after:inset-0 after:w-full after:h-full">
          <Image
            src={homehero2}
            alt=""
            fill
            className="object-cover bg-contain"
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute inset-0 w-full h-full flex flex-col z-[1] justify-center items-center">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="p-4 bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
