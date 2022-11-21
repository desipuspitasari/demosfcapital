import Link from "next/link";
import logo from "../../../public/images/logo/logo.png";
import Image from "next/image";

const Footer = ({ href }: any) => {
  return (
    <section className="flex py-14">
      <div className="max-w-6xl w-full px-10 py-8 mx-auto bg-white">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
          <div>
            <div className="flex justify-start items-center space-x-2">
              <Image src={logo} height={48} width={48} alt="" />
              <div className="text-blue-primary-400 font-bold text-[22px] font-poppins">
                CAPITAL
              </div>
            </div>
            <p className="max-w-xs font-open-sans  mt-4  text-xl text-black font-bold">
              PT. Surya Fajar Capital Tbk
            </p>
            <p className="max-w-xs mt-4 text-base text-justify text-black">
              Satrio Tower Building Lt. 14 Unit 5, Jalan Prof. Dr. Satrio Blok
              C4/5, Kuningan, DKI Jakarta 12950, Indonesia
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              <p className="max-w-xs mt-4 text-sm  text-justify text-black">
                Copyright © 2022 PT. Surya Fajar Capital All rights reserved.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div></div>
            <div></div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href>
                  {" "}
                  Contact{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  FAQs{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Live Chat{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href>
                  {" "}
                  Privacy Policy{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Terms &amp; Conditions{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Returns Policy{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Accessibility{" "}
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
