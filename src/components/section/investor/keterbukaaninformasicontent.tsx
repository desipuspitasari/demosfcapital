import { FC } from "react";
import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

const listjenisdokumen = [
  { name: "Laporan Tahunan", value: "laporantahunan" },
  { name: "Laporan Keuangan", value: "laporankeuangan" },
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

const KeterbukaanInformasiContent: FC = () => {
  const [jenisDokumen, setJenisDokumen] = useState(null);
  const [tahun, setTahun] = useState(null);
  useEffect(() => {
    jenisDokumen;
    tahun;
  }, [jenisDokumen, tahun]);
  return (
    <div className="flex bg-white w-full flex-col rounded-xl">
      <div className="flex w-full justify-between items-center flex-wrap mb-10">
        {/* Laporan Dropdown */}
        <div className="text-blue-primary text-[32px] font-bold">Report</div>
        <div className="flex flex-wrap relative gap-4">
          {/* Dropdown Jenis Dokumen */}
          <Listbox
            as={Fragment}
            value={jenisDokumen}
            onChange={setJenisDokumen}
          >
            {({ open }) => (
              <div className="relative mt-1">
                <Listbox.Button className="max-w-xs w-[20rem] py-2 px-6 border rounded-full relative flex items-center justify-between">
                  <span className="block truncate">
                    {jenisDokumen == null
                      ? "Jenis Dokumen"
                      : jenisDokumen["name"]}
                  </span>
                  <span className="pointer-events-none">
                    <ChevronUpDownIcon
                      className="h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options
                    className={`absolute z-10 mt-1 max-h-56 overflow-auto rounded-xl w-full border`}
                  >
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
              </div>
            )}
          </Listbox>
          {/* Dropdown Jenis Dokumen */}

          {/* Dropdown Tahun */}
          <Listbox as={Fragment} value={tahun} onChange={setTahun}>
            {({ open }) => (
              <div className="relative mt-1">
                <Listbox.Button className="max-w-[14rem] w-[14rem] py-2 px-6 border rounded-full relative flex items-center justify-between">
                  <span className="block truncate">
                    {tahun == null ? "Tahun" : tahun["name"]}
                  </span>
                  <span className="pointer-events-none">
                    <ChevronUpDownIcon
                      className="h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options
                    className={`absolute z-10 mt-1 max-h-56 overflow-auto rounded-xl w-full border`}
                  >
                    {listtahun.map((item, index) => (
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
              </div>
            )}
          </Listbox>
          {/* Dropdown Tahun */}
        </div>
        {/* Laporan Dropdown */}
      </div>
      {/* Table */}
      <div className="flex w-full bg-white border rounded-xl p-4 shadow-xl">
        <div className=" w-full h-full bg-white rounded-xl overflow-clip overflow-x-auto border">
          <table className="table-auto w-full divide-y">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Jenis Dokumen</th>
                <th>Deskripsi</th>
                <th>Unduh</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Table */}
    </div>
  );
};

export default KeterbukaanInformasiContent;
