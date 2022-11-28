import Link from "next/link";
import profileperusahaan from "../../../../public/images/profileperusahaan.png";
import Image from "next/image";
import { FC } from "react";

const ProfilePerusahaan: FC = () => {
  return (
    <>
      <section className="flex w-full flex-col bg-[white] py-14">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-6 px-4 lg:grid-cols-2 lg:px-0">
          <div className="order-last flex flex-col justify-center text-justify font-open-sans  text-blue-primary-500 md:order-first">
            <div className="mb-4 text-[32px] font-bold">Profil Perusahaan</div>
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
          <div className="mb-4 h-[546px] max-h-[546px] w-[356px] max-w-[356px] justify-self-end overflow-hidden rounded-xl rounded-br-[100px]">
            <Image src={profileperusahaan} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePerusahaan;
