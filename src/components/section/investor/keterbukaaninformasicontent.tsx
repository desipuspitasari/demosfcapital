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
    <div className="flex w-full flex-col rounded-xl bg-white">
      <div className="mb-10 flex w-full flex-wrap items-center justify-between">
        {/* Laporan Dropdown */}
        <div className="text-blue-primary text-[32px] font-bold">Report</div>
        <div className="relative flex flex-wrap gap-4">
          {/* Dropdown Jenis Dokumen */}
          <Listbox
            as={Fragment}
            value={jenisDokumen}
            onChange={setJenisDokumen}
          >
            {({ open }) => (
              <div className="relative mt-1">
                <Listbox.Button className="relative flex w-[20rem] max-w-xs items-center justify-between rounded-full border py-2 px-6">
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
                    className={`absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-xl border`}
                  >
                    {listjenisdokumen.map((item, index) => (
                      <Listbox.Option
                        key={`jenisdokumen-${index}`}
                        value={item}
                        className={({ selected }) =>
                          `cursor-pointer select-none py-2 px-6 font-medium  ${
                            selected
                              ? "bg-slate-300 text-blue-primary-500"
                              : "bg-white hover:bg-slate-200"
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
                <Listbox.Button className="relative flex w-[14rem] max-w-[14rem] items-center justify-between rounded-full border py-2 px-6">
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
                    className={`absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-xl border`}
                  >
                    {listtahun.map((item, index) => (
                      <Listbox.Option
                        key={`jenisdokumen-${index}`}
                        value={item}
                        className={({ selected }) =>
                          `cursor-pointer select-none py-2 px-6 font-medium  ${
                            selected
                              ? "bg-slate-300 text-blue-primary-500"
                              : "bg-white hover:bg-slate-200"
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
      <div className="flex w-full rounded-xl border bg-white p-4 shadow-xl">
        <div className=" h-full w-full overflow-clip overflow-x-auto rounded-xl border bg-white">
          <table className="w-full table-auto divide-y">
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
