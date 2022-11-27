import logo from "../../public/images/logo/logo.png";
import Image from "next/image";
import NavItem from "./footer/navitem";
import Link from "next/link";
import SwicthLanguage from "./switchlanguage";
import MenuButton from "./menubutton";

const navlist = [
  { name: "Tentang Kami", href: "about" },
  { name: "Produk & layanan", href: "productsandservices" },
  { name: "Berita & Kegiatan", href: "newsandevent" },
  { name: "Hubungan Investor", href: "investor" },
  { name: "Kontak", href: "contact" },
];

const Navbar = () => {
  return (
    <div className="fixed top-4 left-1/2 z-50 flex w-full -translate-x-1/2 justify-center px-2 lg:px-0">
      <div className="hidden w-full max-w-6xl items-center justify-between space-x-10 rounded-full border bg-white p-4 px-8 py-4 font-semibold drop-shadow-lg lg:flex">
        <div className="flex items-center justify-center space-x-2">
          <Link href="/" className="flex flex-wrap items-center space-x-2">
            <Image src={logo} height={48} width={48} alt="" />
            <div className="font-poppins text-[22px] font-bold text-blue-primary-400">
              CAPITAL
            </div>
          </Link>
        </div>
        <div className="flex space-x-10">
          {navlist.map((item) => {
            return (
              <NavItem href={item.href} key={`${item.name}`}>
                {item.name}
              </NavItem>
            );
          })}
        </div>
        <SwicthLanguage />
      </div>
      <div className="flex w-full max-w-6xl items-center justify-between space-x-10 rounded-full border bg-white p-4 px-4 py-4 font-semibold lg:hidden">
        <div className="flex items-center justify-center space-x-2">
          <Link href="/" className="flex flex-wrap items-center space-x-2">
            <Image src={logo} height={48} width={48} alt="" />
            <div className="font-poppins text-[22px] font-bold text-blue-primary-400">
              CAPITAL
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <SwicthLanguage />
          <MenuButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
