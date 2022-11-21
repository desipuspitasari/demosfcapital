import logo from "../../public/images/logo/logo.png";
import Image from "next/image";
import NavItem from "./navitem";

const Navbar = () => {
  return (
    <div className="fixed top-4 p-4 bg-white px-8 py-4 rounded-full border left-1/2 -translate-x-1/2 flex justify-center items-center space-x-10 font-semibold">
      <div className="flex justify-center items-center space-x-2">
        <Image src={logo} height={48} width={48} alt="" />
        <div className="text-blue-primary-400 font-bold text-[22px] font-poppins">
          CAPITAL
        </div>
      </div>
      <div className="flex">
        <NavItem href="home" />
      </div>
    </div>
  );
};

export default Navbar;
