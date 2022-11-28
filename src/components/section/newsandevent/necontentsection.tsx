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
      <section className="flex max-h-[500px] min-h-[500px] w-full flex-col justify-end bg-newsandevent bg-cover bg-no-repeat px-2">
        <div className="mx-auto flex w-full max-w-6xl flex-col">
          <div className="mb-4 font-open-sans text-[40px] font-bold text-white">
            Berita & Kegiatan
          </div>
          <Tab.List className="mb-8 flex space-x-2">
            {content.map((item, index) => {
              return (
                <Tab
                  as="button"
                  key={index}
                  className="group flex w-[262px] max-w-[262px] justify-center rounded-full border-[1px] border-white px-6 py-4 font-open-sans text-base text-white"
                >
                  <div className="group-focus:border-b group-focus:border-white">
                    {item.name}
                  </div>
                  <FiArrowUpRight className="h-0 w-0 transition-all group-hover:h-4 group-hover:w-4 group-hover:transition-all group-focus:h-0 group-focus:w-0" />
                </Tab>
              );
            })}
          </Tab.List>
        </div>
      </section>
      <Tab.Panels
        as="section"
        className="flex w-full flex-col bg-white pt-32 pb-16"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col">
          {content.map((item, index) => (
            <Tab.Panel
              as="div"
              key={`${item.name}`}
              className="flex w-full flex-col"
            >
              <div className="mb-10 grid w-full grid-cols-1 gap-6 px-2 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
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
              <div className="flex w-full items-center justify-end space-x-4">
                <button className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-gray-100">
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>
                <div className="">1 / 8</div>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-gray-100">
                  <ChevronRightIcon className="h-4 w-4" />
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
