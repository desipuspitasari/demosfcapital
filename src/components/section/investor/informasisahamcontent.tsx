import { FC } from "react";
import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

const InformasiSahamContent: FC = () => {
  return (
    <>
      <section className="flex w-full flex-col bg-[white] py-14">
        <div className="mb-4 text-[32px] font-bold text-blue-primary-500">
          PT Surya Fajar Capital Tbk
        </div>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-6 px-4 lg:grid-cols-5 lg:px-0">
          <div className="order-last flex flex-col justify-center text-justify font-open-sans font-semibold  text-blue-primary-500 md:order-first">
            <div className=" text-neutral-400 ">Kode Saham</div>
            <div className="mb-4 text-2xl ">SFAN</div>
          </div>
          <div className="order-last flex flex-col justify-center text-justify font-open-sans font-semibold  text-blue-primary-500 md:order-first">
            <div className=" text-neutral-400">Saham Yang Beredar</div>
            <div className="mb-4 text-2xl">1.359.934.021</div>
          </div>
          <div className="order-last flex flex-col  justify-center text-justify font-open-sans font-semibold  text-blue-primary-500 md:order-first">
            <div className=" text-neutral-400">Saham Yang Beredar</div>
            <div className="mb-4 text-2xl">1.071.000.000.000</div>
          </div>
          <div className="order-last flex flex-col justify-center text-justify font-open-sans font-semibold  text-blue-primary-500 md:order-first">
            <div className=" text-neutral-400">Tanggal Listing</div>
            <div className="mb-4 text-2xl">19 Juni 2019</div>
          </div>
          <div className="order-last flex flex-col justify-center text-justify font-open-sans font-semibold  text-blue-primary-500 md:order-first">
            <div className=" text-neutral-400">Tanggal Efektif</div>
            <div className="mb-4 text-2xl">13 Juni 2019</div>
          </div>
          <div className="order-last flex flex-col justify-center text-justify font-open-sans font-semibold  text-blue-primary-500 md:order-first">
            <div className=" text-neutral-400">Nominal</div>
            <div className="mb-4 text-2xl">100</div>
          </div>
          <div className="order-last flex flex-col justify-center text-justify font-open-sans font-semibold  text-blue-primary-500 md:order-first">
            <div className=" text-neutral-400">Harga IPO</div>
            <div className="mb-4 text-2xl">188</div>
          </div>
          <div className="order-last flex flex-col justify-center text-justify font-open-sans font-semibold  text-blue-primary-500 md:order-first">
            <div className=" text-neutral-400">Saham IPO</div>
            <div className="mb-4 text-2xl">212.50 M</div>
          </div>
          <div className="order-last flex flex-col justify-center text-justify font-open-sans font-semibold  text-blue-primary-500 md:order-first">
            <div className=" text-neutral-400">Jumlah IPO</div>
            <div className="mb-4 text-2xl">39.95 B</div>
          </div>
        </div>
        <div className="flex-col-2 md:flex-col-1 mx-auto flex w-full max-w-6xl gap-x-6 px-4 lg:px-0">
          <div className="order-last flex flex-col justify-center text-justify font-open-sans font-semibold  text-blue-primary-500 md:order-first">
            <div className="mt-4 text-neutral-400">Pinjaman Emisi</div>
            <div className="mb-4 text-2xl ">
              PT Victoria Sekuritas Indonesia
            </div>
          </div>

          <div className="order-last flex flex-col justify-center  text-justify font-open-sans font-semibold  text-blue-primary-500 md:order-first">
            <div className="mx-[85px] mt-4  text-neutral-400 ">
              Biro Administrasi Efek
            </div>
            <div className="mx-[85px] mb-4   text-2xl ">
              PT Adimitra Jasa Korpora
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex w-full flex-col rounded-xl bg-white">
          <div className="mb-10 flex w-full flex-wrap items-center justify-between">
            {/* Laporan Dropdown */}
            <div>
              <div className="text-[32px] font-bold text-blue-primary-500">
                Infromasi Saham
              </div>
              <div className="text-blue-primary-500">Efektif 31 Juli 2021</div>
            </div>

            {/* Laporan Dropdown */}
          </div>
          {/* Table */}
          <div className="flex w-full rounded-xl border bg-white p-4 shadow-xl">
            <div className=" h-full w-full overflow-clip overflow-x-auto rounded-xl border bg-white">
              <table className="w-full table-auto divide-y text-left">
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
