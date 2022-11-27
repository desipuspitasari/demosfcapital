import { FC, useState } from "react";
import { Tab } from "@headlessui/react";
import { FiArrowUpRight } from "react-icons/fi";

import KeuanganContent from "./keuangancontent";

const tablists = [
  { name: "Keuangan", content: <KeuanganContent /> },
  { name: "Keterbukaan Informasi", content: "" },
  { name: "Informasi Saham", content: "" },
];

const InvContentSection: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <section className="flex max-h-[500px] min-h-[500px] w-full flex-col justify-end bg-about bg-cover bg-left px-2  pb-4">
        <div className="mx-auto flex w-full max-w-6xl flex-col ">
          <div className="text-[40px] font-bold text-white ">Tentang Kami</div>
          <Tab.List
            as="div"
            className="box-border flex w-full flex-nowrap space-x-2 overflow-x-auto whitespace-nowrap"
          >
            {tablists.map((item, index) => (
              <Tab
                onClick={() => setSelectedIndex(index)}
                as="button"
                key={index}
                className="group flex w-[262px] max-w-[262px] justify-center rounded-full border-[1px] border-white px-6 py-4 font-open-sans text-base text-white"
              >
                <div className="group-focus:border-b group-focus:border-white">
                  {item.name}
                </div>
                <FiArrowUpRight className="h-0 w-0 transition-all group-hover:h-4 group-hover:w-4 group-hover:transition-all group-focus:h-0 group-focus:w-0" />
              </Tab>
            ))}
          </Tab.List>
        </div>
      </section>
      <Tab.Panels as="section" className="flex w-full flex-col px-2 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col">
          {tablists.map((item, index) => (
            <Tab.Panel key={index}>{item.content}</Tab.Panel>
          ))}
        </div>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default InvContentSection;
