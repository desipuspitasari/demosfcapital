import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import tatakelolaitem from "./tatakelolaitem";

const TatakelolaPerusahaan = () => {
  return (
    <div className="flex flex-col w-full space-y-4">
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
