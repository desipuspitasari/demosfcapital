import { FC, Fragment } from "react";
import { Tab } from "@headlessui/react";
import card from "../../../../public/images/card.png";
import Card from "../../card";
import LinkBtnSecondary from "../../linkbtnsecondary";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
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

const NewsSection: FC = () => {
  return (
    <Tab.Group
      as="div"
      className="flex w-full flex-col bg-gradient-to-b from-[#F0F0F0] to-white py-14"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col space-y-8">
        <div className="grid grid-cols-1 font-open-sans text-blue-primary-500 lg:grid-cols-2">
          <div className="mb-2 text-[32px] font-bold">
            Berita dan Kegiatan Terbaru
          </div>
          <Tab.List
            as="div"
            className="flex justify-center space-x-2 lg:justify-end"
          >
            <Tab
              as="button"
              className="group flex w-[262px] max-w-[262px] justify-center rounded-full bg-blue-primary-500 px-6 py-4 font-open-sans text-base text-white "
            >
              <div className="group-focus:border-b group-focus:border-white  ">
                Rilis Media
              </div>
              <FiArrowUpRight className="h-0 w-0 transition-all group-hover:h-4 group-hover:w-4 group-hover:transition-all group-focus:h-0 group-focus:w-0" />
            </Tab>
            <Tab
              as="button"
              className="group flex w-[262px] max-w-[262px] justify-center rounded-full bg-blue-primary-500 px-6 py-4 font-open-sans text-base text-white "
            >
              <div className="group-focus:border-b group-focus:border-white  ">
                Internal
              </div>
              <FiArrowUpRight className="h-0 w-0 transition-all group-hover:h-4 group-hover:w-4 group-hover:transition-all group-focus:h-0 group-focus:w-0" />
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels as="div" className="flex w-full flex-col">
          <Tab.Panel as={Fragment}>
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
                className="flex w-full !py-6 !px-4 "
                spaceBetween={50}
                slidesPerView={3}
                modules={[Pagination]}
                pagination={{
                  type: "bullets",
                  clickable: true,
                  el: "#custom-bullet-news",
                  bulletClass: "swiper-bullet",
                  bulletActiveClass: "swiper-bullet-active",
                }}
              >
                {news.map((item: any, index: number) => (
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
              <div
                className="flex items-center justify-center space-x-2"
                id="custom-bullet-news"
              ></div>
            </>
          </Tab.Panel>
          <Tab.Panel as={Fragment}>
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
                className="flex w-full !py-6 !px-4 "
                spaceBetween={50}
                slidesPerView={3}
                modules={[Pagination]}
                pagination={{
                  type: "bullets",
                  clickable: true,
                  el: "#custom-bullet-event",
                  bulletClass: "swiper-bullet",
                  bulletActiveClass: "swiper-bullet-active",
                }}
              >
                {event.map((item: any, index: number) => (
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
              <div
                className="flex items-center justify-center space-x-2"
                id="custom-bullet-event"
              ></div>
            </>
          </Tab.Panel>
        </Tab.Panels>

        <div className="self-end">
          <LinkBtnSecondary href="#">Lihat Semua</LinkBtnSecondary>
        </div>
      </div>
    </Tab.Group>
  );
};

export default NewsSection;
