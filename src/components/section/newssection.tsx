import { FC, Fragment } from "react";
import { Tab } from "@headlessui/react";

import card from "../../../public/images/card.png";
import Card from "../card";
import ButtonSecondary from "../../components/buttonsecondary";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FiArrowUpRight } from "react-icons/fi";

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

const event = [
  {
    title: "SF Capital Events",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#",
    image: card,
  },

  {
    title: "SF Capital Events",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#",
    image: card,
  },

  {
    title: "SF Capital Events",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#",
    image: card,
  },
];

const SlideContent: FC<{ items: any }> = ({ items }) => {
  return (
    <>
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
        {items.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <Card
              title={item.title}
              content={item.content}
              date={item.date}
              href={item.href}
              image={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const NewsSection: FC = () => {
  return (
    <Tab.Group as="div" className="flex py-14 w-full flex-col bg-white">
      <div className="w-full max-w-6xl space-y-8 flex-col flex mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 text-blue-primary-500 font-open-sans">
          <div className="text-[32px] font-black mb-2">
            Berita dan Kegiatan Terbaru
          </div>
          <Tab.List
            as="div"
            className="flex justify-center lg:justify-end space-x-2"
          >
            <Tab
              as="button"
              className="bg-blue-primary-500 font-open-sans text-base flex px-6 py-4 w-[262px] max-w-[262px] text-white group justify-center rounded-full "
            >
              <div className="group-focus:border-b group-focus:border-white  ">
                Rilis Media
              </div>
              <FiArrowUpRight className="w-0 h-0 group-hover:w-4 group-hover:h-4 group-hover:transition-all group-focus:w-0 group-focus:h-0 transition-all" />
            </Tab>
            <Tab
              as="button"
              className="bg-blue-primary-500 font-open-sans text-base flex px-6 py-4 w-[262px] max-w-[262px] text-white group justify-center rounded-full "
            >
              <div className="group-focus:border-b group-focus:border-white  ">
                Internal
              </div>
              <FiArrowUpRight className="w-0 h-0 group-hover:w-4 group-hover:h-4 group-hover:transition-all group-focus:w-0 group-focus:h-0 transition-all" />
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels as="div" className="flex w-full">
          <Tab.Panel as={Fragment}>
            <SlideContent items={news} />
          </Tab.Panel>
          <Tab.Panel as={Fragment}>
            <SlideContent items={event} />
          </Tab.Panel>
        </Tab.Panels>

        <div className="self-end">
          <ButtonSecondary href="#">Lihat Semua</ButtonSecondary>
        </div>
      </div>
    </Tab.Group>
  );
};

export default NewsSection;
