import Link from "next/link";
import { FC } from "react";
import ButtonPrimary from "../../components/buttonprimary";
import Image from "next/image";
import card from "../../../public/images/card.png";
import ButtonLink from "../../components/buttonlink";
import Card from "../card";
import ButtonSecondary from "../../components/buttonsecondary";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const news = [
  {
    title: "Rights Issue PGJO",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#",
    image: card,
  },

  {
    title: "Rights Issue PGJO",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#",
    image: card,
  },

  {
    title: "Rights Issue PGJO",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#",
    image: card,
  },
];

const NewsSection: FC = () => {
  return (
    <section className="flex py-14 w-full flex-col bg-white">
      <div className="w-full max-w-6xl space-y-8 flex-col flex mx-auto">
        <div className="flex text-blue-primary-500 font-open-sans text-justify justify-between gap-x-6">
          <div className="text-[32px] font-black">
            Berita dan Kegiatan Terbaru
          </div>
          <div className="self-end flex space-x-2">
            <div>
              <ButtonPrimary href="#">Rilis Media</ButtonPrimary>
            </div>
            <div>
              <ButtonPrimary href="#">Internal</ButtonPrimary>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col  ">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            direction="horizontal"
            className="flex w-full"
            spaceBetween={50}
            slidesPerView={3}
          >
            {news.map((i) => (
              <SwiperSlide key={i.title}>
                <Card
                  title={i.title}
                  content={i.content}
                  date={i.date}
                  href={i.href}
                  image={i.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="self-end">
          <ButtonSecondary href="#">Lihat Semua</ButtonSecondary>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
