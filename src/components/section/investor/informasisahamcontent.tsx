import { FC } from "react";
import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

const InformasiSahamContent: FC = () => {
  return (
    <>
      <section className="flex py-14 w-full flex-col bg-[white]">
        <div className="text-[32px] font-bold mb-4 text-blue-primary-500">
          PT Surya Fajar Capital Tbk
        </div>
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-x-6 px-4 lg:px-0 mx-auto">
          <div className="flex flex-col justify-center font-semibold order-last md:order-first text-blue-primary-500  font-open-sans text-justify">
            <div className=" text-neutral-400 ">Kode Saham</div>
            <div className="mb-4 text-2xl ">SFAN</div>
          </div>
          <div className="flex flex-col justify-center font-semibold order-last md:order-first text-blue-primary-500  font-open-sans text-justify">
            <div className=" text-neutral-400">Saham Yang Beredar</div>
            <div className="mb-4 text-2xl">1.359.934.021</div>
          </div>
          <div className="flex flex-col justify-center  font-semibold order-last md:order-first text-blue-primary-500  font-open-sans text-justify">
            <div className=" text-neutral-400">Saham Yang Beredar</div>
            <div className="mb-4 text-2xl">1.071.000.000.000</div>
          </div>
          <div className="flex flex-col justify-center font-semibold order-last md:order-first text-blue-primary-500  font-open-sans text-justify">
            <div className=" text-neutral-400">Tanggal Listing</div>
            <div className="mb-4 text-2xl">19 Juni 2019</div>
          </div>
          <div className="flex flex-col justify-center font-semibold order-last md:order-first text-blue-primary-500  font-open-sans text-justify">
            <div className=" text-neutral-400">Tanggal Efektif</div>
            <div className="mb-4 text-2xl">13 Juni 2019</div>
          </div>
          <div className="flex flex-col justify-center font-semibold order-last md:order-first text-blue-primary-500  font-open-sans text-justify">
            <div className=" text-neutral-400">Nominal</div>
            <div className="mb-4 text-2xl">100</div>
          </div>
          <div className="flex flex-col justify-center font-semibold order-last md:order-first text-blue-primary-500  font-open-sans text-justify">
            <div className=" text-neutral-400">Harga IPO</div>
            <div className="mb-4 text-2xl">188</div>
          </div>
          <div className="flex flex-col justify-center font-semibold order-last md:order-first text-blue-primary-500  font-open-sans text-justify">
            <div className=" text-neutral-400">Saham IPO</div>
            <div className="mb-4 text-2xl">212.50 M</div>
          </div>
          <div className="flex flex-col justify-center font-semibold order-last md:order-first text-blue-primary-500  font-open-sans text-justify">
            <div className=" text-neutral-400">Jumlah IPO</div>
            <div className="mb-4 text-2xl">39.95 B</div>
          </div>
        </div>
        <div className="w-full max-w-6xl flex flex-col-2 md:flex-col-1 gap-x-6 px-4 lg:px-0 mx-auto">
          <div className="flex flex-col justify-center font-semibold order-last md:order-first text-blue-primary-500  font-open-sans text-justify">
            <div className="mt-4 text-neutral-400">Pinjaman Emisi</div>
            <div className="mb-4 text-2xl ">
              PT Victoria Sekuritas Indonesia
            </div>
          </div>

          <div className="flex flex-col justify-center font-semibold  order-last md:order-first text-blue-primary-500  font-open-sans text-justify">
            <div className="mt-4 text-neutral-400  mx-[85px] ">
              Biro Administrasi Efek
            </div>
            <div className="mb-4 text-2xl   mx-[85px] ">
              PT Adimitra Jasa Korpora
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex bg-white w-full flex-col rounded-xl">
          <div className="flex w-full justify-between items-center flex-wrap mb-10">
            {/* Laporan Dropdown */}
            <div>
              <div className="text-blue-primary-500 text-[32px] font-bold">
                Infromasi Saham
              </div>
              <div className="text-blue-primary-500">Efektif 31 Juli 2021</div>
            </div>

            {/* Laporan Dropdown */}
          </div>
          {/* Table */}
          <div className="flex w-full bg-white border rounded-xl p-4 shadow-xl">
            <div className=" w-full h-full bg-white rounded-xl overflow-clip overflow-x-auto border">
              <table className="table-auto w-full divide-y text-left">
                <thead>
                  <tr>
                    <th>Nama Pemegang Saham</th>
                    <th>Jumlah Lembar Saham</th>
                    <th>Presentase</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td>PT Surya Fajar Corpora</td>
                    <td>998.874.430</td>
                    <td>73.01%</td>
                  </tr>
                  <tr>
                    <td>Steffen</td>
                    <td>60.000.000</td>
                    <td>4.41%</td>
                  </tr>
                  <tr>
                    <td>Masyarakat</td>
                    <td>307.059.591</td>
                    <td>22.58%</td>
                  </tr>
                  <tr>
                    <td>Saham Treasury</td>
                    <td>0</td>
                    <td>0.00%</td>
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
      </section>
    </>
  );
};

export default InformasiSahamContent;
