import Link from "next/link";
import profileperusahaan from "../../../../public/images/profileperusahaan.png";
import Image from "next/image";
import { FC } from "react";

const ProfilePerusahaan: FC = () => {
  return (
    <>
      <section className="flex py-14 w-full flex-col bg-[white]">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-x-6 px-4 lg:px-0 mx-auto ">
          <div className="flex flex-col justify-center order-last md:order-first text-blue-primary-500  font-open-sans text-justify">
            <div className="text-[32px] font-black mb-4">Profil Perusahaan</div>
            <div className="mb-4">
              Didirikan pada akhir tahun 2016, Perseroan awalnya bergerak di
              bidang jasa konsultasi keuangan dengan tujuan memberikan solusi
              dan nilai tambah terbaik bagi setiap kebutuhan-kebutuhan klien
              korporasi kami.
            </div>
            <div className="mb-4">
              Dalam waktu kurang dari satu tahun sejak didirikan, SF Capital
              telah dipercaya dan diberikan mandat oleh berbagai klien -
              beberapa di antaranya merupakan pemain kunci dalam industri. Hal
              ini menunjukkan kapasitas dan kemampuan SF Capital dalam
              memberikan nilai tambah dan mencapai tujuan-tujuan yang
              ditargetkan oleh para klien kami.
            </div>
            <div className="mb-4">
              Melalui pengalaman panjang dalam bisnis penasihat keuangan yang
              dimilikinya, tim SF Capital telah membangun jaringan keuangan dan
              investor strategis, bankir, dan lembaga keuangan domestik dan
              Internasional yang luas.
            </div>
          </div>
          <div className="max-h-[546px] rounded-xl mb-4 rounded-br-[100px] overflow-hidden max-w-[356px] h-[546px] w-[356px] justify-self-end">
            <Image src={profileperusahaan} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePerusahaan;
