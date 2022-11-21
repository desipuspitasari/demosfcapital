import logo from "../../public/images/logo/logo.png";
import Image from "next/image";
import NavItem from "./navitem";
import Link from "next/link";
import SwicthLanguage from "./switchlanguage";

const Navbar = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full flex justify-center px-2 lg:px-0">
      <div className="w-full max-w-6xl p-4 bg-white px-8 py-4 rounded-full border flex justify-between items-center space-x-10 font-semibold">
        <div className="flex justify-center items-center space-x-2">
          <Link href="#_" className="flex flex-wrap items-center space-x-2">
            <Image src={logo} height={48} width={48} alt="" />
            <div className="text-blue-primary-400 font-bold text-[22px] font-poppins">
              CAPITAL
            </div>
          </Link>
        </div>
        <div className="flex space-x-10">
          <NavItem href="home" />
          <NavItem href="home" />
          <NavItem href="home" />
          <NavItem href="home" />
          <NavItem href="home" />
        </div>
        <SwicthLanguage />
      </div>
    </div>
  );
};

export default Navbar;
