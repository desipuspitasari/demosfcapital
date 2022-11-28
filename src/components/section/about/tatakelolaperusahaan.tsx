import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import tatakelolaitem from "./tatakelolaitem";

const TatakelolaPerusahaan = () => {
  return (
    <div className="my-20 flex w-full flex-col space-y-4">
      <div className="mb-6 text-center text-4xl font-bold text-blue-primary-500">
        Tata Kelola Perusahaan
      </div>
      <div className="pb-6 text-justify">
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
            className="flex w-full flex-col space-y-2"
          >
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex items-center justify-between rounded-xl border px-4 py-2 ${
                    open ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  {item.title}
                  <ChevronUpIcon
                    className={`h-4 w-4 transition-all ${
                      open ? "rotate-180 transform" : ""
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel
                  as="div"
                  className="w-full space-y-2 rounded-xl border bg-white px-4 py-6 text-justify text-slate-600"
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
