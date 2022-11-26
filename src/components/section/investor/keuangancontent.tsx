import { FC } from "react";
import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

const listjenisdokumen = [
  { name: "Yearly Report", value: "laporantahunan" },
  { name: "Other report", value: "laporankeuangan" },
];

const listtahun = [
  { name: "2015", value: "2015" },
  { name: "2016", value: "2016" },
  { name: "2017", value: "2017" },
  { name: "2018", value: "2018" },
  { name: "2019", value: "2019" },
  { name: "2020", value: "2020" },
  { name: "2021", value: "2021" },
  { name: "2022", value: "2022" },
];

const KeuanganContent: FC = () => {
  const [jenisDokumen, setJenisDokumen] = useState(null);
  const [tahun, setTahun] = useState(null);
  useEffect(() => {
    jenisDokumen;
    tahun;
  }, [jenisDokumen, tahun]);
  return (
    <div className="flex bg-white w-full flex-col rounded-xl">
      <div className="flex w-full justify-between flex-wrap">
        <div className="text-blue-primary text-[32px] font-bold">Report</div>
        <div className="flex flex-wrap relative gap-4">
          {/* for tahun */}
          <Listbox
            id="tahun"
            key="tahun"
            as="div"
            className="relative"
            value={tahun}
            onChange={setTahun}
          >
            <Listbox.Button className="max-w-xs w-[20rem] py-2 px-6 border rounded-full relative flex items-center justify-between">
              <span className="block">
                {tahun == null ? "Year" : `${tahun["name"]}`}
              </span>
              <span className="pointer-events-none">
                <ChevronUpDownIcon
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Listbox.Options className="absolute mt-1 w-full overflow-auto bg-white rounded-lg border">
                {listtahun.map((item, index) => (
                  <Listbox.Option
                    key={`tahun-${index}`}
                    value={item}
                    className={({ selected }) =>
                      `cursor-pointer select-none py-2 px-6 font-medium  ${
                        selected
                          ? "bg-slate-300 text-blue-primary-500"
                          : "hover:bg-slate-200 bg-white"
                      }`
                    }
                  >
                    {item.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </Listbox>
          {/* for tahun */}

          {/* for jenis dokumen */}
          <Listbox
            key="dokumen"
            id="dokumen"
            as="div"
            value={jenisDokumen}
            onChange={setJenisDokumen}
            className="relative"
          >
            <Listbox.Button className="max-w-xs w-[20rem] py-2 px-6 border rounded-full relative flex items-center justify-between">
              <span className="block">
                {jenisDokumen == null
                  ? "Type of Document"
                  : `${jenisDokumen["name"]}`}
              </span>
              <span className="pointer-events-none">
                <ChevronUpDownIcon
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Listbox.Options className="absolute mt-1 w-full overflow-auto bg-white rounded-lg border">
                {listjenisdokumen.map((item, index) => (
                  <Listbox.Option
                    key={`jenisdokumen-${index}`}
                    value={item}
                    className={({ selected }) =>
                      `cursor-pointer select-none py-2 px-6 font-medium  ${
                        selected
                          ? "bg-slate-300 text-blue-primary-500"
                          : "hover:bg-slate-200 bg-white"
                      }`
                    }
                  >
                    {item.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </Listbox>
          {/* for jenis dokumen */}
        </div>
      </div>
    </div>
  );
};

export default KeuanganContent;
