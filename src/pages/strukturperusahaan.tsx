import Head from "next/head";
import { NextPage } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";
import strukturperusahaan from "../../public/images/strukturperusahaan.png";
import Image from "next/image";

const StrukturPerusahaan: NextPage = () => {
  return (
    <>
      <Head>
        <title>SF Capital</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section className="min-h-screen w-full"></section>
      <section className="flex pt-32 pb-16 w-full flex-col bg-white">
        <div className="w-full max-w-6xl grid grid-cols-1  gap-6 mx-auto px-4 lg:px-0">
          <div className="bg-white pb-6  border p-4 rounded-xl  drop-shadow-xl w-full ">
            <div className="w-full  overflow-hidden rounded-2xl aspect-square relative">
              <div className="text-blue-primary-500 text-[38px] text-center font-black mt-6">
                Struktur Perusahaan
              </div>
              <div className="w-full  overflow-hidden rounded-2xl aspect-square relative">
                <Image fill src={strukturperusahaan} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Navbar />
    </>
  );
};

export default StrukturPerusahaan;
