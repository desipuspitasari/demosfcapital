import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import tatakelolaitem from "./tatakelolaitem";

const TatakelolaPerusahaan = () => {
  return (
    <div className="flex flex-col w-full space-y-4 my-20">
      <div className="text-4xl text-center mb-6 font-bold">
        Tata Kelola Perusahaan
      </div>
      <div className="text-justify pb-6">
        Penerapan Tata Kelola Perusahaan yang baik atau Good Corporate
        Governance merupakan bentuk upaya dari Perseroan untuk membangun suatu
        organisasi yang memiliki aturan, praktik, dan proses pengendalian yang
        baik antar pemangku kepentingan yang bertujuan untuk meningkatkan nilai
        perusahaan.
      </div>
      {tatakelolaitem.map((item, index) => {
        return (
          <Disclosure
            key={index}
            as="div"
            className="flex flex-col w-full space-y-2"
          >
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center rounded-xl bg-white px-4 py-2 border">
                  {item.title}
                  <ChevronUpIcon
                    className={`w-4 h-4 transition-all ${
                      open ? "rotate-180 transform" : ""
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel
                  as="div"
                  className="bg-white w-full px-4 py-6 border rounded-xl text-slate-600 space-y-2 text-justify"
                >
                  {item.content}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}
    </div>
  );
};

export default TatakelolaPerusahaan;
