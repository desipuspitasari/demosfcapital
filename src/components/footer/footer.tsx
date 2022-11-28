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
    <section className="flex w-full py-14 px-2">
      <div className="mx-auto flex w-full max-w-6xl flex-col rounded-[32px] border bg-white px-6 py-10 shadow-[0_7px_14px_rgba(24,39,75,0.12)] lg:px-8">
        <Link href="/" className="flex flex-wrap items-center space-x-2">
          <Image src={logo} height={48} width={48} alt="" />
          <div className="font-poppins text-[22px] font-bold text-blue-primary-400">
            CAPITAL
          </div>
        </Link>
        <div className="grid grid-cols-1 gap-x-7 lg:grid-cols-5">
          <div className="flex flex-col lg:col-span-3">
            <div className="mt-2 text-[20px] font-bold text-black">
              PT. Surya Fajar Capital Tbk
            </div>
            <div className="mb-5 w-full lg:w-3/4">
              Satrio Tower Building Lt. 14 Unit 5, Jalan Prof. Dr. Satrio Blok
              C4/5, Kuningan, DKI Jakarta 12950, Indonesia
            </div>
          </div>
          <div className="mb-2 flex  flex-col space-y-2">
            {navlist1.map((item) => {
              return (
                <NavItem href={item.href} key={item.name}>
                  {item.name}
                </NavItem>
              );
            })}
          </div>
          <div className="mb-20 flex flex-col space-y-2">
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
