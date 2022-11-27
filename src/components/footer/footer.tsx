import Link from "next/link";
import logo from "../../../public/images/logo/logo.png";
import Image from "next/image";
import NavItem from "./navitem";
import { FC } from "react";

const navlist1 = [
  { name: "Tentang Kami", href: "about" },
  { name: "Produk & Layanan", href: "productsandservices" },
  { name: "Berita & Pengumuman", href: "newsandevent" },
];

const navlist2 = [
  { name: "Hubungan Investor", href: "investor" },
  { name: "Kontak", href: "#" },
];

const Footer: FC = () => {
  return (
    <section className="flex py-14 w-full px-2">
      <div className="max-w-6xl w-full px-10 py-8 mx-auto bg-white border flex flex-col rounded-[32px] shadow-[0_7px_14px_rgba(24,39,75,0.12)]">
        <Link href="/" className="flex flex-wrap items-center space-x-2">
          <Image src={logo} height={48} width={48} alt="" />
          <div className="text-blue-primary-400 font-bold text-[22px] font-poppins">
            CAPITAL
          </div>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-7">
          <div className="flex flex-col lg:col-span-3">
            <div className="font-bold text-black text-[20px] mt-2">
              PT. Surya Fajar Capital Tbk
            </div>
            <div className="w-full lg:w-3/4 mb-5">
              Satrio Tower Building Lt. 14 Unit 5, Jalan Prof. Dr. Satrio Blok
              C4/5, Kuningan, DKI Jakarta 12950, Indonesia
            </div>
          </div>
          <div className="flex flex-col  space-y-2 mb-2">
            {navlist1.map((item) => {
              return (
                <NavItem href={item.href} key={item.name}>
                  {item.name}
                </NavItem>
              );
            })}
          </div>
          <div className="flex flex-col space-y-2 mb-20">
            {navlist2.map((item) => {
              return (
                <NavItem href={item.href} key={item.name}>
                  {item.name}
                </NavItem>
              );
            })}
          </div>
        </div>
        <div className="mt-2 text-xs lg:mt-20">
          Copyright © 2022 PT. Surya Fajar Capital All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
