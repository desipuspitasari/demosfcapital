import { Tab } from "@headlessui/react";
import Card from "../../card";
import card from "../../../../public/images/card.png";
import { FiArrowUpRight } from "react-icons/fi";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const news = [
  {
    title: "Rights Issue PGJO",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
  {
    title: "Rights Issue PGJO",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
  {
    title: "Rights Issue PGJO",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
  {
    title: "Rights Issue PGJO",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
  {
    title: "Rights Issue PGJO",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
  {
    title: "Rights Issue PGJO",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
  {
    title: "Rights Issue PGJO",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
  {
    title: "Rights Issue PGJO",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
  {
    title: "Rights Issue PGJO",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
];
const events = [
  {
    title: "Event SF Capital",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
  {
    title: "Event SF Capital",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
  {
    title: "Event SF Capital",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
  {
    title: "Event SF Capital",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
  {
    title: "Event SF Capital",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
  {
    title: "Event SF Capital",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
  {
    title: "Event SF Capital",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
  {
    title: "Event SF Capital",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
  {
    title: "Event SF Capital",
    content:
      "SFAST didesain sesuai dengan kebutuhan investor. Dengan tampilan yang easy.",
    date: "February 17, 2021",
    href: "#_",
    image: card,
  },
];

const content = [
  { name: "Rilis Media", content: news },
  { name: "Internal", content: events },
];

const NEContentSection = () => {
  return (
    <Tab.Group>
      <section className="min-h-[500px] max-h-[500px] w-full bg-newsandevent bg-cover bg-no-repeat flex flex-col px-2 justify-end">
        <div className="w-full max-w-6xl mx-auto flex flex-col">
          <div className="text-white text-[40px] mb-4 font-open-sans font-bold">
            Berita & Kegiatan
          </div>
          <Tab.List className="flex space-x-2 mb-8">
            {content.map((item, index) => {
              return (
                <Tab
                  as="button"
                  key={index}
                  className="border-white border-[1px] font-open-sans text-base flex px-6 py-4 w-[262px] max-w-[262px] text-white group justify-center rounded-full"
                >
                  <div className="group-focus:border-b group-focus:border-white">
                    {item.name}
                  </div>
                  <FiArrowUpRight className="w-0 h-0 group-hover:w-4 group-hover:h-4 group-hover:transition-all group-focus:w-0 group-focus:h-0 transition-all" />
                </Tab>
              );
            })}
          </Tab.List>
        </div>
      </section>
      <Tab.Panels
        as="section"
        className="flex pt-32 pb-16 w-full flex-col bg-white"
      >
        <div className="w-full max-w-6xl flex flex-col mx-auto">
          {content.map((item, index) => (
            <Tab.Panel
              as="div"
              key={`${item.name}`}
              className="flex flex-col w-full"
            >
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 lg:px-0 mb-10">
                {item.content.map((item, index) => (
                  <Card
                    key={`${item.title}-${index}`}
                    title={item.title}
                    content={item.content}
                    date={item.date}
                    href={item.href}
                    image={item.image}
                  />
                ))}
              </div>
              <div className="flex w-full justify-end items-center space-x-4">
                <button className="w-8 h-8 rounded-full border flex justify-center items-center hover:bg-gray-100">
                  <ChevronLeftIcon className="w-4 h-4" />
                </button>
                <div className="">1 / 8</div>
                <button className="w-8 h-8 rounded-full border flex justify-center items-center hover:bg-gray-100">
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
            </Tab.Panel>
          ))}
        </div>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default NEContentSection;
