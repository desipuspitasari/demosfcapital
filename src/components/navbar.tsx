import logo from "../../public/images/logo/logo.png";
import Image from "next/image";
import NavItem from "./navitem";
import Link from "next/link";
import SwicthLanguage from "./switchlanguage";
import MenuButton from "./menubutton";

const navlist = [
  { name: "Tentang Kami", href: "#_" },
  { name: "Produk & layanan", href: "#" },
  { name: "Berita & Kegiatan", href: "newsandevent" },
  { name: "Hubungan Investor", href: "#" },
  { name: "Kontak", href: "#" },
];

const Navbar = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full flex justify-center px-2 lg:px-0 z-50">
      <div className="w-full max-w-6xl p-4 bg-white px-8 py-4 rounded-full border hidden lg:flex justify-between items-center space-x-10 font-semibold drop-shadow-lg">
        <div className="flex justify-center items-center space-x-2">
          <Link href="/home" className="flex flex-wrap items-center space-x-2">
            <Image src={logo} height={48} width={48} alt="" />
            <div className="text-blue-primary-400 font-bold text-[22px] font-poppins">
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
      <div className="w-full max-w-6xl p-4 bg-white px-4 py-4 rounded-full border lg:hidden flex justify-between items-center space-x-10 font-semibold">
        <div className="flex justify-center items-center space-x-2">
          <Link href="/home" className="flex flex-wrap items-center space-x-2">
            <Image src={logo} height={48} width={48} alt="" />
            <div className="text-blue-primary-400 font-bold text-[22px] font-poppins">
              CAPITAL
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <SwicthLanguage />
          <MenuButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
