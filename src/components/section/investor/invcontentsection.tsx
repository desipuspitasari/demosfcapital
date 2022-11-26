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
      <section className="max-h-[500px] min-h-[500px] flex flex-col px-2 pb-4 justify-end  w-full bg-about bg-cover  bg-left">
        <div className="w-full max-w-6xl flex flex-col mx-auto ">
          <div className="font-bold text-white text-[40px] ">Tentang Kami</div>
          <Tab.List
            as="div"
            className="flex space-x-2 w-full overflow-x-auto box-border whitespace-nowrap flex-nowrap"
          >
            {tablists.map((item, index) => (
              <Tab
                onClick={() => setSelectedIndex(index)}
                as="button"
                key={index}
                className="border-white border-[1px] font-open-sans text-base flex px-6 py-4 w-[262px] max-w-[262px] text-white group justify-center rounded-full"
              >
                <div className="group-focus:border-b group-focus:border-white">
                  {item.name}
                </div>
                <FiArrowUpRight className="w-0 h-0 group-hover:w-4 group-hover:h-4 group-hover:transition-all group-focus:w-0 group-focus:h-0 transition-all" />
              </Tab>
            ))}
          </Tab.List>
        </div>
      </section>
      <Tab.Panels as="section" className="w-full flex flex-col px-2 py-20">
        <div className="w-full max-w-6xl flex flex-col mx-auto">
          {tablists.map((item, index) => (
            <Tab.Panel key={index}>{item.content}</Tab.Panel>
          ))}
        </div>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default InvContentSection;
